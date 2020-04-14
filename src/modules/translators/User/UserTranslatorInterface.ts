import {User} from "../../entities/User";
import {UserTranslatorInput} from "./UserTranslatorInput";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export interface UserTranslatorInterface {
  translate(port: UserTranslatorInput): ModuleQueryResponse<User>;
}