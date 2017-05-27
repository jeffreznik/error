// Some commonly used error types defined here
// https://www.joyent.com/node-js/production/design/errors

export class GeneralError extends Error {
  constructor(message, errorBelow) {
    super(message)
    this.name = 'GeneralError'
    this.message = message
    this.errorBelow = errorBelow

    this.log = this.log.bind(this)
    this.wrap = this.wrap.bind(this)

    if (errorBelow && errorBelow.message) {
      this.message += '\n> ' + errorBelow.message
    }
  }

  log(message) {
    console.error(`${this.name}: ${message}\n> ${this.message}`)
  }

  wrap(message) {
    this.message = message + '\n> ' + this.message
    return this
  }
}

export class AuthorizationError extends GeneralError {
  constructor(message = '', errorBelow) {
    super(message, errorBelow)
    this.name = 'AuthorizationError'
  }
}

export class HttpError extends GeneralError {
  constructor(message = '', errorBelow) {
    super(message, errorBelow)
    this.name = 'HttpError'
    this.data = errorBelow.data
    this.headers = errorBelow.headers
    this.status = errorBelow.status
    this.statusText = errorBelow.statusText
  }
}

export class NotFoundError extends GeneralError {
  constructor(message = '', errorBelow) {
    super(message, errorBelow)
    this.name = 'NotFoundError'
  }
}

export class ValidationError extends GeneralError {
  constructor(message = '', errorBelow, attributeErrors) {
    super(message, errorBelow)
    this.name = 'ValidationError'
    this.attributeErrors = attributeErrors
  }
}
