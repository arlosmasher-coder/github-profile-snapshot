/**
 * Custom error classes for github-profile-snapshot.
 */

/**
 * Base error class for all GithubProfileSnapshot errors.
 */
export class GithubProfileSnapshotError extends Error {
  /** Machine-readable error code. */
  readonly code: string;

  constructor(message: string, code = "GITHUBPROFILESNAPSHOT_ERROR") {
    super(message);
    this.name = "GithubProfileSnapshotError";
    this.code = code;
  }
}

/**
 * Raised when the SDK is misconfigured.
 */
export class ConfigurationError extends GithubProfileSnapshotError {
  constructor(message: string) {
    super(message, "CONFIGURATION_ERROR");
    this.name = "ConfigurationError";
  }
}

/**
 * Raised when input validation fails.
 */
export class ValidationError extends GithubProfileSnapshotError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

/**
 * Raised when an operation exceeds its time limit.
 */
export class TimeoutError extends GithubProfileSnapshotError {
  constructor(message: string) {
    super(message, "TIMEOUT_ERROR");
    this.name = "TimeoutError";
  }
}
