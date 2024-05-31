<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>edit message</title>
</head>
<body>
    <h3>edit message id: <%= chat._id%></h3>
    <p>message sent from <b><%=chat.from%></b> to <b><%=chat.to%></b></p>
    <form method="post" action="/chats/<%=chat._id%>?_method=PUT">
        <textarea name="msg"><%=chat.msg%></textarea>
        <button>submit</button>
    </form>
</body>
</html>
