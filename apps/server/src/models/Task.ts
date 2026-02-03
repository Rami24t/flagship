import mongoose, { Schema, Document, Types } from "mongoose";

export interface ITask extends Document {
  title: string;
  description?: string;
  completed: boolean;
  project: Types.ObjectId;
  assignee?: Types.ObjectId;
}

const TaskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
  assignee: { type: Schema.Types.ObjectId, ref: "User" },
});

export const Task = mongoose.model<ITask>("Task", TaskSchema);
