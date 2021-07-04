export interface IGunDbModel {
    livechat: {
        [chatMessageName: string]: {
            [id: string]: {
                message: string
            }
        }
    }
}