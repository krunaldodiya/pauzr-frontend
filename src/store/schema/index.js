import { schema } from "normalizr";

const userSchema = new schema.Entity("users");
const userListSchema = new schema.Array(userSchema);

const timerSchema = new schema.Entity("timers");
const timerListSchema = new schema.Array(timerSchema);

export { userSchema, userListSchema, timerSchema, timerListSchema };
