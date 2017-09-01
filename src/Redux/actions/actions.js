import * as type from "../constants";

export default function actionTrigger(type, data, description = null) {
  return { type, data, description };
}