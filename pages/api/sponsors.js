import { sponsors } from "../../utils/sponsors"

export default function handler(req, res) {
  res.status(200).json(sponsors)
}
