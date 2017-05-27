# @jeffreznik/error

This is a collection of error classes that subclass from the builtin `Error` class.  Each subclass has type-specific properties.

**Installation**

`npm install @jeffreznik/error --save`

## Classes

### GeneralError extends Error

Base error class which provides common functionality for typed error subclasses.

**Constructor**

`const error = new GeneralError(message[, errorBelow])`

Creates a new GeneralError with `message` set.  If `errorBelow` is provided, its message stack will be appended to message.

#### Properties

* `name` (String) - returns the name of the class (e.g. 'GeneralError', 'HttpError', etc.)
* `message` (String) - returns the error message
* `errorBelow` (Error) - returns the error passed to the constructor when the object was created

#### Methods

**error.log(message)**

Print the entire error message stack, with `mesasge` prepended to the beginning.

Returns: nothing

**error.wrap(message)**

Prepend another error message to the beginning of the message stack.  Useful for adding additional error detail without having to create a new object.

Returns: itself

---

### AuthorizationError extends GeneralError

**Constructor**

`const error = new AuthorizationError(message, errorBelow)`

#### Additional Properties

*none*

---

### HttpError extends GeneralError

**Constructor**

`const error = new HttpError(message, errorBelow)`

Note: the constructor expects the additional properties below to be set in `errorBelow` for them to be set on itself.

**Additional Properties**

* `data` (Object) - response that was provided by the server
* `headers` (Object) - response headers
* `status` (Number) - HTTP status code
* `statusText` (String) - HTTP status message

---

### NotFoundError extends GeneralError

**Constructor**

`const error = new NotFoundError(message, errorBelow)`

#### Additional Properties

*none*

---

### ValidationError extends GeneralError

**Constructor**

`const error = new ValidationError(message, errorBelow, attributeErrors)`

#### Additional Properties

* `attributeErrors` (Object) - key-value pairs of offending attributes and their error messages

---
