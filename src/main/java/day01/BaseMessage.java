package day01;

public class BaseMessage {
	//送达方用户id，如无指定则不用转发
	public String toUserId;
	//发送方用户id
	public String fromUserId;
	//消息类型
	public String msgType;
	//消息创建时间
	public int createTime;
	//承载的Json内容
	/*
	 * 上面的content字段就是用来承载具体的消息数据的，它会根据不同的消息类型，
	 * 传送不同的内容的，而这些内容也是具体的实体类序列化为json字符串的。
	 */
	public String content;
	
	public String getToUserId() {
		return toUserId;
	}
	public void setToUserId(String toUserId) {
		this.toUserId = toUserId;
	}
	public String getFromUserId() {
		return fromUserId;
	}
	public void setFromUserId(String fromUserId) {
		this.fromUserId = fromUserId;
	}
	public String getMsgType() {
		return msgType;
	}
	public void setMsgType(String msgType) {
		this.msgType = msgType;
	}
	public int getCreateTime() {
		return createTime;
	}
	public void setCreateTime(int createTime) {
		this.createTime = createTime;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	
}
