const SocketIo = require("socket.io");
const Text = require("./models/Text");


module.exports = (server) => {
    const io = SocketIo(server);

    io.on("connection", (socket) => {

        console.log('A user connected');

        /*    socket.on("join", async (joinData) => {
               try {
                   const channelId = joinData.channel;
                   const userId = joinData.user;
                   const channel = await Channel.userJoinChannel(channelId, userId);
                   socket.join(channel._id);
                   io.to(channel._id).emit("message", {
                       user: "system",
                       text: ` User ${channel.user._id} has joined the channel!`,
                   });
                   callback(channel);
               } catch (error) {
                   callback(error);
               }
           });
   
           socket.on("sendMessage", async (messageData) => {
               const user = await User.findOne({ _id: socket.id });
               const newMessage = new Text({
                   chatroom: messageData.channelId,
                   user: socket.id,
                   content: messageData.content,
               });
               io.to(messageData.channelId).emit("newMessage", {
                   content: messageData.content,
                   name: user.name,
                   id: socket.id,
               });
               await newMessage.save();
           });
   
           socket.on("leaveRoom", async (joinData, callback) => {
               try {
                   const channel = await Channel.findOneAndUpdate(
                       {
                           _id: joinData.channel,
                       },
                       {
                           $pull: { user: userId },
                       }
                   );
                   await channel.save();
                   socket.leave(joinData.channel);
                   io.to(joinData.channel).emit("message", {
                       user: "system",
                       text: `${joinData.user}aa`,
                   });
                   callback(channel);
               } catch (error) {
                   callback(error);
               }
           }); */
        socket.on("error", (error) => {
            console.error(error);
        });
        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });
};