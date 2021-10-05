/**
 * User: lulongwen
 * Date: 2021/2/7 22:41
 * Description: json-server中间件遵循 nodejs规范
 */

module.exports = (req, res, next) => {
  const { method, path, body } = req;
  if (method === "POST" && path === "/login") {
    const { username, password } = body;
    if (username === "admin" && password === "123456") {
      const data = {
        token: "123",
      };
      return res.status(200).json(data);
    }
    // 登录失败 Bad Request
    return res.status(400).json({ message: "用户名或密码错误" });
  }

  next();
};
