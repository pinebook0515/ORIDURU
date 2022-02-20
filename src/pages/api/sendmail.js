// const request = require("request");
// const sgMail = require("@sendgrid/mail");
// const SENDMAIL_API_KEY = process.env.SENDGRID_API_KEY; //SendGrid API Keyを設定
// const TEMPLATE_ID = process.env.SENDGRID_TEMPLATE_ID; //SendGrid Template IDを設定
// const CMS_API_URL = "https://oriduru.microcms.io/api/v1/contact"; //microCMS endpointを設定
// const CMS_API_KEY = process.env.MICROCMS_POST_API_KEY; //microCMS X-WRITE-API-KEYを設定
// const FROM_MAIL = process.env.MICROCMS_POST_API_KEY; //microCMS X-WRITE-API-KEYを設定

// export default (req, res) => {
//   if (req.method == "POST") {
//     sgMail.setApiKey(SENDMAIL_API_KEY);

//     // POSTデータを取得
//     const data = req.body.data;
//     let adress_list = [];

//     // テンプレートデータを作成
//     let msg = {
//       personalizations: [
//         {
//           to: [{ email: data["mail"] }],
//           bcc: [, { email: FROM_MAIL }],
//           dynamic_template_data: {
//             name: data["name"],
//             name: data["company"],
//             mail: data["mail"],
//             text: data["content"],
//           },
//         },
//       ],
//       from: {
//         email: FROM_MAIL,
//         name: "takumu matsumoto",
//       },
//       template_id: TEMPLATE_ID,
//     };

//     const cmd_data = {
//       name: data["name"],
//       name: data["company"],
//       mail: data["mail"],
//       text: data["content"],
//     };

//     // メールを送信
//     sgMail
//       .send(msg)
//       .then(() => {
//         // CMSに保存
//         request.post(
//           {
//             uri: CMS_API_URL,
//             headers: { "Content-type": "application/json", "X-WRITE-API-KEY": CMS_API_KEY },
//             json: cmd_data,
//           },
//           (err, response) => {
//             if (err) {
//               res.statusCode = 500;
//               res.send(err);
//             }
//             res.statusCode = 200;
//             res.json({ status: response });
//           },
//         );
//       })
//       .catch((error) => {
//         console.log(error);
//         res.statusCode = 500;
//         res.send(error);
//       });
//   } else {
//     res.statusCode = 400;
//     res.send({ error: new Error("invalid parameters") });
//   }
// };
