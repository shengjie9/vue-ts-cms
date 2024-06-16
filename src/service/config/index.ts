let BASE_URL = 'http://codercba.prod:8000'

if (import.meta.env.PROD) {
  BASE_URL = 'http://codercba.prod:8000'
} else {
  BASE_URL = 'http://codercba.dev:8000'
}

export { BASE_URL }
