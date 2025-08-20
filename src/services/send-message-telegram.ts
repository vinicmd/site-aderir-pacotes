import { telegramURIFormater } from "@/util/telegramURIFormater";

export async function SendTelegramMessage({name, telephone}: {name:string, telephone:string} ) {

  const url = telegramURIFormater({
    name,
    telephone,
  });

  await fetch(url).then((response) => {
    if (response.status === 404) {
      fetch(telegramURIFormater({
        name,
        telephone,
        error: true
      }))
    }
  });
}
