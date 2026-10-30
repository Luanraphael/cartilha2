"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** Data de hoje no horário de Brasília, ex.: "30 DE OUTUBRO". */
function today() {
  return new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", timeZone: "America/Sao_Paulo" })
    .format(new Date())
    .toUpperCase();
}

/**
 * "HOJE DIA <data de hoje>": a página é estática, então a data é lida no navegador
 * de quem visita. Antes da hidratação aparece só "HOJE".
 */
export default function TodayLabel() {
  const date = useSyncExternalStore(noop, today, () => null);
  return <>{date ? `HOJE DIA ${date}` : "HOJE"}</>;
}
