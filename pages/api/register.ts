import { hashPassword } from 'libs/auth'
import {NextApiRequest, NextApiResponse} from 'next'


export default async function register(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
    const user = await db.user.create({
        data: {
            email: req.body.email,
            password: await hashPassword(req.body.password),
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
    })
}