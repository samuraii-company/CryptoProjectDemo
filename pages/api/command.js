import { command } from "../../utils/command"

export default function handler(req, res) {
    res.status(200).json(command)
}
