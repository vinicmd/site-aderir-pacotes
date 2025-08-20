
export const telegramURIFormater = ({
  name,
  telephone,
}: {name: string, telephone: string}): string => {
  const chatID = process.env.CHAT_ID;
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;

  const message = encodeURIComponent(
    `<b>Novo Cliente</b>\n\n<b>Nome:</b> ${name}\n<b>Telemóvel:</b> ${telephone}`
  );
  const uri = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatID}&text=${message}&parse_mode=html`;

  return uri;
};
