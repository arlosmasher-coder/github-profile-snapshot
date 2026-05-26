/**
 * Configuration options for GithubProfileSnapshot.
 */
export interface GithubProfileSnapshotOptions {
  /**
   * Enable verbose logging for debugging.
   * @default false
   */
  verbose?: boolean;

  /**
   * Configuration for: GitHub REST/GraphQL fetch with rate-limit handling
   */
  feature1?: Record<string, unknown>;

  /**
   * Configuration for: Deterministic snapshot output and diff-friendly formatting
   */
  feature2?: Record<string, unknown>;

  /**
   * Configuration for: Redaction rules for PII and private signals
   */
  feature3?: Record<string, unknown>;

  /**
   * Configuration for: CLI + importable library API
   */
  feature4?: Record<string, unknown>;
}

/**
 * Result returned by GithubProfileSnapshot operations.
 */
export interface GithubProfileSnapshotResult<T = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** The result data, if successful. */
  data?: T;
  /** Error message, if the operation failed. */
  error?: string;
}
