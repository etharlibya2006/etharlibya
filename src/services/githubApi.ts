export interface GitHubConfig {
  owner: string;
  repo: string;
  branch: string;
  token: string;
}

const GITHUB_CONFIG_STORAGE_KEY = 'ethar_github_config_v1';

export const DEFAULT_GITHUB_CONFIG: GitHubConfig = {
  owner: 'etharlibya2006',
  repo: 'etharlibya',
  branch: 'main',
  token: '',
};

export function getStoredGitHubConfig(): GitHubConfig {
  try {
    const raw = localStorage.getItem(GITHUB_CONFIG_STORAGE_KEY);
    if (raw) {
      return { ...DEFAULT_GITHUB_CONFIG, ...JSON.parse(raw) };
    }
  } catch (e) {
    console.error('Error reading stored GitHub config:', e);
  }
  return DEFAULT_GITHUB_CONFIG;
}

export function saveStoredGitHubConfig(config: GitHubConfig): void {
  try {
    localStorage.setItem(GITHUB_CONFIG_STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Error saving GitHub config:', e);
  }
}

// Unicode safe Base64 encoder (supports Arabic text perfectly)
function utf8ToBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export interface PublishResult {
  success: boolean;
  message: string;
  commitUrl?: string;
}

/**
 * Commits public/data/site_data.json directly to GitHub repository using GitHub REST API.
 * This triggers the deploy.yml GitHub Actions workflow automatically!
 */
export async function publishSiteDataToGitHub(
  payload: unknown,
  customConfig?: Partial<GitHubConfig>
): Promise<PublishResult> {
  const config = { ...getStoredGitHubConfig(), ...(customConfig || {}) };

  if (!config.token || !config.token.trim()) {
    return {
      success: false,
      message: 'لم يتم حفظ رمز الوصول (GitHub Token) بعد. يرجى إدخال الرمز من نافذة "إعدادات الربط مع GitHub" لتفعيل النشر التلقائي بضغطة زر واحدة.',
    };
  }

  const cleanOwner = config.owner.trim() || 'etharlibya2006';
  const cleanRepo = config.repo.trim() || 'etharlibya';
  const cleanBranch = config.branch.trim() || 'main';
  const filePath = 'public/data/site_data.json';
  const fileUrl = `https://api.github.com/repos/${cleanOwner}/${cleanRepo}/contents/${filePath}?ref=${cleanBranch}`;

  try {
    // 1. Get current file's SHA if it exists in the repository
    let sha: string | undefined = undefined;
    try {
      const getRes = await fetch(fileUrl, {
        headers: {
          Authorization: `Bearer ${config.token.trim()}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (getRes.ok) {
        const fileData = await getRes.json();
        sha = fileData.sha;
      } else if (getRes.status === 401 || getRes.status === 403) {
        return {
          success: false,
          message: 'رمز الوصول (GitHub Token) غير صالح أو لا يملك صلاحية كتابة (Contents: Write). يرجى التحقق من صلاحيات الرمز.',
        };
      }
    } catch {
      // In case file doesn't exist yet, proceed with undefined sha
    }

    // 2. Prepare JSON content and encode as UTF-8 Base64
    const jsonString = JSON.stringify(payload, null, 2);
    const contentBase64 = utf8ToBase64(jsonString);

    const now = new Date();
    const dateFormatted = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    const commitMessage = `تحديث بيانات الموقع من لوحة التحكم [Auto-Sync] - ${dateFormatted}`;

    // 3. Send PUT request to create/update the file in GitHub
    const putRes = await fetch(`https://api.github.com/repos/${cleanOwner}/${cleanRepo}/contents/${filePath}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${config.token.trim()}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: commitMessage,
        content: contentBase64,
        sha,
        branch: cleanBranch,
      }),
    });

    if (putRes.ok) {
      const resultData = await putRes.json();
      return {
        success: true,
        message: 'تم حفظ ونشر التعديل بنجاح في مستودع GitHub! أداة GitHub Actions تعمل الآن في الخلفية لتحديث الموقع لجميع الزوار.',
        commitUrl: resultData.commit?.html_url,
      };
    } else {
      const errData = await putRes.json().catch(() => ({}));
      return {
        success: false,
        message: `تعذر الحفظ في GitHub: ${errData.message || 'تأكد من اسم المستودع والصلاحيات'}`,
      };
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return {
      success: false,
      message: `تعذر الاتصال بـ GitHub: ${errorMsg}`,
    };
  }
}
