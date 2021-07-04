export interface IGunDbModel {
    livechat: {
        [chatMessageName: string]: {
            messageListData: {
                [id: string]: {
                    message: string
                }
            },
            messageList: any[]
        }
    }
}