import { FeedReaders } from "../../typings/client";
import { formatVersion } from "../../utils/version";
import { variableReplacement } from "../../utils/variable-replacement";
import { userAgentParser } from "../../utils/user-agent";
import { loadRegexes } from "../../utils/yaml-loader";

export interface FeedReaderResult {
  type: string;
  name: string;
  version: string;
  url: string;
}

let feedReaders: FeedReaders;

export default class FeedReaderParser {
  private readonly feedReaders: FeedReaders;

  constructor() {
    this.feedReaders = feedReaders || loadRegexes("client/feed_readers");

    if (!feedReaders) {
      feedReaders = this.feedReaders;
    }
  }

  public parse = (userAgent: string): FeedReaderResult => {
    const result: FeedReaderResult = {
      type: "",
      name: "",
      version: "",
      url: ""
    };

    for (const feedReader of feedReaders) {
      const match = userAgentParser(feedReader.regex, userAgent);

      if (!match) continue;

      result.type = "feed reader";
      result.name = variableReplacement(feedReader.name, match);
      result.version = formatVersion(variableReplacement(feedReader.version, match));
      result.url = feedReader.url;

      break;
    }

    return result;
  };
}