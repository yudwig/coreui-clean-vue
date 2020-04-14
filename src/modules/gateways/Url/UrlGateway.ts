import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {UrlDirectories} from "../../valueobjects/UrlDirectories";
import {UrlParameters} from "../../valueobjects/UrlParameters";
import {UrlParameter} from "../../valueobjects/UrlParameter";
import {UrlHref} from "../../valueobjects/UrlHref";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {UrlGatewayInterface} from "./UrlGatewayInterface";
import {UrlGatewayInput} from "./UrlGatewayInput";
import {UrlGatewayOutput} from "./UrlGatewayOutput";

export class UrlGateway implements UrlGatewayInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  private splitParameters(urlSearchParams: URLSearchParams) {
    let params: UrlParameter[] = [];
    urlSearchParams.forEach((val, key) => {
      if (key) {
        params.push(new UrlParameter(key, val));
      }
    });
    return params;
  }

  private splitDirectories(path: string) {
    return path.split('/').filter(dir => Boolean(dir));
  }

  convert(port: UrlGatewayInput): ModuleQueryResponse<UrlGatewayOutput> {
    this.support.debug(port.url);
    let values;
    try {
      const url = new URL(port.url);
      values = {
        urlHref: new UrlHref(url.href),
        urlDirectories: new UrlDirectories(this.splitDirectories(url.pathname)),
        urlParameters: new UrlParameters(this.splitParameters(url.searchParams)),
      };
    } catch(e) {
      return new ModuleQueryResponse<UrlGatewayOutput>(null, e);
    }
    return new ModuleQueryResponse<UrlGatewayOutput>(values);
  }
}