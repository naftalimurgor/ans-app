import { keccak256 } from 'js-sha3'

export function decodeLabelhash(hash: string) {
  if (!(hash.startsWith('[') && hash.endsWith(']'))) {
    throw Error(
      'Expected encoded labelhash to start and end with square brackets',
    )
  }

  if (hash.length !== 66) {
    throw Error('Expected encoded labelhash to have a length of 66')
  }

  return `${hash.slice(1, -1)}`
}

export function encodeLabelhash(hash: string) {
  if (!hash.startsWith('0x')) {
    throw new Error('Expected label hash to start with 0x')
  }

  if (hash.length !== 66) {
    throw new Error('Expected label hash to have a length of 66')
  }

  return `[${hash.slice(2)}]`
}

export function isEncodedLabelhash(hash: string) {
  return hash.startsWith('[') && hash.endsWith(']') && hash.length === 66
}

function getLabels() {
  return JSON.parse(localStorage.getItem('labels') as string) || {}
}

function _saveLabel(hash: string, label: any) {
  const labels = getLabels()
  localStorage.setItem(
    'labels',
    JSON.stringify({
      ...labels,
      [hash]: label,
    }),
  )
  return hash
}

export function saveLabel(label: string) {
  const hash = `${keccak256(label.toLowerCase())}`
  return _saveLabel(hash, label)
}

export function saveName(name: string) {
  const nameArray = name.split('.')
  nameArray.forEach((label: any) => {
    saveLabel(label)
  })
}

// eslint-disable-next-line consistent-return
export function checkLabel(hash: string): string | undefined {
  const labels = getLabels()
  if (isEncodedLabelhash(hash)) {
    return labels[decodeLabelhash(hash)]
  }

  if (hash.startsWith('0x')) {
    return labels[`${hash.slice(2)}`]
  }
}

export function encodeLabel(label: any) {
  try {
    return encodeLabelhash(label)
  } catch {
    return label
  }
}

export function parseName(name: string) {
  const nameArray = name.split('.')
  return nameArray.map((label: any) => encodeLabel(label)).join('.')
}

export function checkIsDecrypted(string: string | string[]) {
  return !string?.includes('[')
}

export function decryptName(name: string) {
  return name
    .split('.')
    .map((label: any) => checkLabel(label) || label)
    .join('.')
}

export function truncateUndecryptedName(name: string) {
  const nameArray = name.split('.')
  const truncatedArray = nameArray.map((label: string | any[]) => {
    if (checkIsDecrypted(label)) return label
    return `${label.slice(0, 5)}...${label.slice(60)}`
  })
  return truncatedArray.join('.')
}

export function checkLocalStorageSize() {
  let allStrings = ''
  for (const key in window.localStorage) {
    if (Object.prototype.hasOwnProperty.call(window.localStorage, key)) {
      allStrings += window.localStorage[key]
    }
  }
  return allStrings
    ? `${3 + (allStrings.length * 16) / (8 * 1024)} KB`
    : 'Empty (0 KB)'
}
