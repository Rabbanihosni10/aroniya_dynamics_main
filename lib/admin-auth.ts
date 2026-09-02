import { createHmac, timingSafeEqual } from 'node:crypto'

const cookieName = 'aronia_admin'

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET
  if (!value) throw new Error('ADMIN_SESSION_SECRET is not configured.')
  return value
}

function signature(value: string) {
  return createHmac('sha256', secret()).update(value).digest('hex')
}

export function isAdminPasswordValid(password: string) {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) throw new Error('ADMIN_PASSWORD is not configured.')
  const actualBuffer = Buffer.from(password)
  const expectedBuffer = Buffer.from(expected)
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer)
}

export function createAdminCookieValue() {
  const value = `${Date.now()}`
  return `${value}.${signature(value)}`
}

export function isAdminCookieValid(value: string | undefined) {
  if (!value) return false
  const [timestamp, providedSignature] = value.split('.')
  if (!timestamp || !providedSignature || Date.now() - Number(timestamp) > 1000 * 60 * 60 * 12) return false
  const expectedSignature = signature(timestamp)
  const actualBuffer = Buffer.from(providedSignature)
  const expectedBuffer = Buffer.from(expectedSignature)
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer)
}

export { cookieName }
