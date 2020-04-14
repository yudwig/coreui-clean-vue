import {UrlFactoryInterface} from "./UrlFactoryInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Url} from "../../entities/Url";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {UrlGatewayOutput} from "../../gateways/Url/UrlGatewayOutput";

export class UrlFactory implements UrlFactoryInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  create(port: UrlGatewayOutput): ModuleQueryResponse<Url> {
    let url: Url;
    try {
      url = new Url(port.urlHref, port.urlDirectories, port.urlParameters);
    } catch(e) {
      return new ModuleQueryResponse<Url>(null, e);
    }
    return new ModuleQueryResponse<Url>(url);
  }
}