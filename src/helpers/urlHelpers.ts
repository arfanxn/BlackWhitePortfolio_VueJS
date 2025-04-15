/**
 * Extracts the repository name from a GitHub URL.
 *
 * This function takes a GitHub URL as input and uses a regular expression
 * to extract the repository name. If the URL does not match the expected
 * format, it returns null.
 *
 * @param {string} url - The GitHub URL from which to extract the repository name.
 * @returns {string | null} - The extracted repository name or null if no valid name is found.
 *
 * @example
 * extractGithubRepositoryName('https://github.com/user/repository') => 'repository
 * extractGithubRepositoryName('https://github.com/user/repository.git') => 'repository'
 * extractGithubRepositoryName('https://example.com/user/repository') => null
 */
export const extractGithubRepositoryName = (url: string): string | null => {
  // Regular expression to match GitHub repository URLs
  const regex = /^(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/]+)\/([^\/]+)(?:\.git)?$/
  const match = url.match(regex)

  // If a match is found, return the repository name
  return match ? match[2] : null
}

/**
 * Fetches the title of a web page from its URL.
 *
 * This function takes a URL as input, fetches the HTML content of the page,
 * and extracts the title of the page from the HTML using a regular expression.
 * If the title is not found or an error occurs, it returns null.
 *
 * @param {string} url - The URL of the web page from which to extract the title.
 * @returns {Promise<string | null>} - The extracted title or null if no valid title is found.
 *
 * @example
 * fetchUrlTitle('https://example.com') => 'Example Domain'
 * fetchUrlTitle('https://example.com/no-title') => null
 */
export const fetchUrlTitle = async (url: string): Promise<string | null> => {
  try {
    const response = await fetch(url)
    const text = await response.text()
    const titleMatch = text.match(/<title>(.*?)<\/title>/)
    if (!titleMatch || !titleMatch[1]) return null

    console.log('titleMatch:', titleMatch.toString())

    return titleMatch[1] // The extracted title
  } catch {
    return null
  }
}
