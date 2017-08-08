import * as type from "../constants";

export default function actionTrigger(type, data) {
  return { type, data };
}