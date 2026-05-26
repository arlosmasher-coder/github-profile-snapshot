import { describe, it, expect } from "vitest";
import { GithubProfileSnapshot } from "../src";

describe("GithubProfileSnapshot", () => {
  it("should create an instance with default options", () => {
    const instance = new GithubProfileSnapshot();
    expect(instance).toBeDefined();
  });

  it("should accept custom options", () => {
    const instance = new GithubProfileSnapshot({ verbose: true });
    expect(instance).toBeDefined();
  });

  it("should run successfully", async () => {
    const instance = new GithubProfileSnapshot();
    const result = await instance.run();
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
