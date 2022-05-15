import { plans } from "../../utils/plans"

export default function handler(req, res) {
    res.status(200).json(plans)
}
