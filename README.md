# github-profile-snapshot

Generate reproducible JSON snapshots of GitHub profiles for audits and diffs.

## Installation

```bash
npm install github-profile-snapshot
```

## Quick Start

```typescript
import { GithubProfileSnapshot } from "github-profile-snapshot";

const instance = new GithubProfileSnapshot();
const result = await instance.run();
console.log(result);
```

## Features

- GitHub REST/GraphQL fetch with rate-limit handling
- Deterministic snapshot output and diff-friendly formatting
- Redaction rules for PII and private signals
- CLI + importable library API

## API Reference

### `GithubProfileSnapshot`

#### Constructor

```typescript
new GithubProfileSnapshot(options?: GithubProfileSnapshotOptions)
```

#### Methods

- `run()` - Execute the main operation. Returns `Promise<GithubProfileSnapshotResult>`.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build
npm run build

# Type check
npm run lint
```

## Publishing

1. Update version in `package.json`
2. Create a GitHub release with tag `v0.x.0`
3. The GitHub Action will automatically publish to npm

## License

MIT
