import Image from "next/image";
import type { ReactNode } from "react";
import ShowcaseSlider from "./showcase-slider";
import { Check, ChevronsDown, Gift, Minus, Plus, ShieldCheck, X } from "lucide-react";

const IMG = "/assets";
const CHECKOUT_PREMIUM = "https://pay.cakto.com.br/4gwnhop_1252585";
const CHECKOUT_BASIC = "https://pay.cakto.com.br/dmfa9gr_1252563";
const display = "font-display";

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

const MAIN_PRODUCT = "Cartilha Prática";
const MAIN_PRODUCT_FULL = "Cartilha Prática: Como Vender na Shopee, do Zero à Primeira Venda";
const MAIN_MOCKUP = { img: "mockup-cartilha-shopee.png", w: 1306, h: 1205 };
const PHONE_MOCKUP = { img: "mockup-smartphone-notificacoes.png", w: 1306, h: 1205 };

const HERO_BULLETS = ["Acesso vitalício", "Envio imediato por e-mail e WhatsApp", "Garantia de 7 dias"];

const INCLUDES = [
  "Prepare tudo o que precisa para começar a vender na Shopee, entendendo como a plataforma funciona, como os clientes compram e quais são seus primeiros passos.",
  "Entenda como a Shopee funciona por dentro, desde a busca dos produtos até o pagamento, a aprovação do pedido e o recebimento do dinheiro das suas vendas.",
  "Aprenda a criar sua loja na Shopee com CPF ou CNPJ, sabendo qual escolher, quais dados preencher e o que configurar para começar.",
  "Descubra como encontrar produtos com potencial de venda, pesquisando o que já tem procura, analisando anúncios de outras lojas e identificando oportunidades para começar.",
  "Aprenda onde encontrar fornecedores para comprar produtos e revender, incluindo lojas de fábrica, atacadistas, pequenos fabricantes e formas práticas de encontrar contatos.",
  "Saiba calcular o preço de venda e quanto realmente vai lucrar, considerando as tarifas da Shopee, o custo dos produtos, frete, embalagem e outros descontos.",
  "Aprenda a criar e publicar anúncios completos na Shopee, com fotos, títulos, descrições, categorias, preços, estoque e variações, seguindo o passo a passo de cada campo.",
  "Monte seu plano para conquistar as primeiras vendas, sabendo quais produtos testar, como definir seu preço inicial e como começar a atrair compradores para sua loja.",
  "Aprenda a usar cupons, ofertas e promoções da Shopee, incluindo campanhas de datas especiais, afiliados, Shopee Vídeo e Shopee Live para divulgar seus produtos.",
  "Saiba como conquistar boas avaliações e construir a reputação da sua loja, aprendendo a atender clientes, responder mensagens e cuidar dos indicadores da Shopee.",
  "Descubra exatamente o que fazer quando realizar sua primeira venda, desde conferir o pedido e preparar o pacote até imprimir a etiqueta e organizar a postagem.",
  "Aprenda a embalar e enviar seus produtos corretamente, entendendo etiquetas, materiais de embalagem, prazos de postagem e como funciona a logística da Shopee.",
  "Organize os próximos passos da sua loja para continuar evoluindo, com orientações para acompanhar sua operação e dar continuidade à sua jornada de vendas.",
  "Atividades práticas e checklists ao final das lições, para você aplicar o que aprendeu, saber o que fazer em cada etapa e seguir o caminho do zero à sua primeira venda sem ficar perdido.",
];

const TRUST_BADGES = [
  { label: "Garantia de 7 Dias", icon: null },
  { label: "Acesso Imediato", icon: "icone-acesso.png" },
  { label: "Suporte Dedicado", icon: "icone-suporte.png" },
  { label: "Satisfação Garantida", icon: "icone-satisfacao.png" },
  { label: "Compra 100% Segura", icon: "icone-compra-segura.png" },
];

// Páginas reais da cartilha (em pé), mostradas nos slides "Take a look inside".
const SHOWCASE = [
  { title: "Por que vender na Shopee", img: "veja-01-por-que-vender.png" },
  { title: "A regra dos 450 pedidos", img: "veja-02-regra-450-pedidos.png" },
  { title: "Vamos fazer a conta de um produto real", img: "veja-03-lucro-produto-real.png" },
  { title: "Um preço maior pode deixar menos dinheiro", img: "veja-04-preco-maior.png" },
  { title: "O anúncio é sua vitrine na Shopee", img: "veja-05-criar-anuncios.png" },
  { title: "Categoria, marca e atributos certos", img: "veja-06-atributos-certos.png" },
  { title: "Preço, estoque e variações", img: "veja-07-preco-variacoes.png" },
  { title: "Passo a passo para publicar", img: "veja-08-passo-a-passo-publicar.png" },
  { title: "Datas duplas, afiliados e vídeos", img: "veja-09-datas-duplas-videos.png" },
];

// Capas das lições, mostradas nos slides "Módulos".
const MODULES = [
  { title: "Lição 01: Antes de começar", img: "modulo-01-antes-de-comecar.png" },
  { title: "Lição 03: Sua conta, CPF ou CNPJ", img: "modulo-03-cpf-ou-cnpj.png" },
  { title: "Lição 04: Como encontrar produtos com potencial de venda", img: "modulo-04-produtos.png" },
  { title: "Lição 06: Tarifas, preços e lucro", img: "modulo-06-tarifas-lucro.png" },
  { title: "Lição 07: Criando um anúncio completo na Shopee", img: "modulo-07-anuncio-completo.png" },
  { title: "Lição 08: O plano para conquistar as primeiras vendas", img: "modulo-08-primeiras-vendas.png" },
  { title: "Lição 09: Cupons, campanhas e ferramentas de promoção", img: "modulo-09-promocao.png" },
  { title: "Lição 10: Reputação, avaliações e atendimento", img: "modulo-10-reputacao.png" },
];

// Páginas de exercícios do fim de cada lição, mostradas nos slides "Deveres de Casa".
const HOMEWORK = [
  { title: "Dever de casa da Lição 01", img: "dever-01-antes-de-comecar.png" },
  { title: "Dever de casa da Lição 03", img: "dever-03-abertura-loja.png" },
  { title: "Dever de casa da Lição 04", img: "dever-04-pesquisa-produtos.png" },
  { title: "Dever de casa da Lição 05", img: "dever-05-fornecedores.png" },
  { title: "Dever de casa da Lição 06", img: "dever-06-tarifas-lucro.png" },
  { title: "Dever de casa da Lição 07", img: "dever-07-anuncio.png" },
  { title: "Dever de casa da Lição 08", img: "dever-08-primeiras-vendas.png" },
  { title: "Dever de casa da Lição 09", img: "dever-09-promocao.png" },
  { title: "Dever de casa da Lição 10", img: "dever-10-reputacao.png" },
];

// O 1º bônus tem layout próprio (título, imagem, subtítulo, descrição); os demais vêm em BONUSES.
const FIRST_BONUS = {
  title: "50 Ideias de Produtos mais Procurados para Começar a Vender na Shopee",
  img: "bonus-50-ideias-produtos.png",
  price: "DE R$ 27,90",
};

const BONUSES = [
  { title: "Lista de Fornecedores +30 Nichos", img: "bonus-lista-fornecedores.png", price: "DE R$ 37,90" },
  { title: "Assistente de IA para Pesquisar Produtos e Concorrentes", img: "bonus-assistente-ia.png", price: "DE R$ 29,90" },
  { title: "30 Prompts de IA para Criar Anúncios na Shopee", img: "bonus-30-prompts-ia.png", price: "DE R$ 24,90" },
  {
    title: "+20 Modelos Prontos de Promoções e Cupons para Atrair Clientes na Shopee",
    img: "bonus-modelos-promocoes.png",
    price: "DE R$ 19,90",
  },
];


const WHY = [
  "Um caminho organizado do zero à primeira venda, para você saber exatamente o que fazer em cada etapa, sem depender de informações soltas.",
  "Telas e funcionalidades da Shopee ilustradas, para o que você vê na página ser o mesmo que você vê no seu celular ou computador.",
  "Exemplos práticos e cálculos prontos, para você entender quanto cobrar e quanto realmente sobra em cada venda.",
  "Explicações curtas, simples e diretas, sem vídeos longos para assistir e sem teoria que você nunca vai usar.",
  "Atividades e checklists ao final das lições, para você aplicar enquanto aprende e avançar com segurança até a primeira venda.",
];

const FOR_WHOM = [
  "Quem quer começar a vender na Shopee, mas não sabe por onde começar.",
  "Quem quer uma renda extra vendendo pela internet, mesmo sem experiência.",
  "Quem já tentou vender, mas se perdeu entre tarifas, anúncios e envios.",
  "Quem tem dúvida sobre quais produtos vender e onde encontrar fornecedores.",
  "Quem aprende melhor vendo o passo a passo do que assistindo aulas longas.",
];

type OfferItem = { text: string; included: boolean };

const BONUS_TITLES = [FIRST_BONUS.title, ...BONUSES.map((b) => b.title)];

const PREMIUM_ITEMS: OfferItem[] = [
  MAIN_PRODUCT_FULL,
  "13 módulos que acompanham toda a jornada, da preparação ao envio",
  "Telas da Shopee ilustradas, exemplos práticos e cálculos",
  "Atividades práticas e checklists ao final das lições",
  ...BONUS_TITLES.map((t) => `Bônus: ${t}`),
  "Formato PDF, pronto para ver, baixar ou imprimir",
  "Acesso pelo celular, tablet ou computador",
  "Acesso vitalício",
  "Envio imediato por e-mail e WhatsApp",
].map((text) => ({ text, included: true }));

// Basic: só o material principal; os 5 bônus aparecem riscados, com X vermelho.
const BASIC_ITEMS: OfferItem[] = [
  ...[MAIN_PRODUCT_FULL, "Acesso vitalício", "Garantia de 7 dias"].map((text) => ({ text, included: true })),
  ...BONUS_TITLES.map((t) => ({ text: `Bônus: ${t}`, included: false })),
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "Como vou receber a cartilha?",
    a: (
      <>
        Assim que o pagamento é confirmado, <strong>você recebe tudo automaticamente</strong> no seu e-mail e no seu WhatsApp.
        <br />
        Não precisa enviar comprovante nem fazer nada a mais. Nosso sistema entrega tudo de forma{" "}
        <strong>imediata e segura</strong>.
        <br />
        Só confira se digitou o seu e-mail e o seu WhatsApp corretamente na hora da compra.
      </>
    ),
  },
  {
    q: "É um produto físico ou digital?",
    a: (
      <>
        É <strong>100% digital</strong>. Você recebe a cartilha e os bônus em PDF de alta qualidade, para abrir no
        celular, tablet ou computador, ou <strong>imprimir quando quiser</strong>.
      </>
    ),
  },
  {
    q: "Nunca vendi nada na internet. A cartilha é para mim?",
    a: (
      <>
        Sim! A cartilha <strong>começa do absoluto zero</strong>, com as expectativas e a preparação, e segue passo a
        passo pela criação da loja, escolha dos produtos, anúncios e envios até a sua primeira venda.
      </>
    ),
  },
  {
    q: "Preciso ter CNPJ para começar?",
    a: (
      <>
        Não. A cartilha explica <strong>quando faz sentido começar com CPF</strong>, quando o CNPJ passa a valer a pena
        e o que muda em cada caso, para você escolher com segurança.
      </>
    ),
  },
  {
    q: "A cartilha garante que eu vou vender?",
    a: (
      <>
        Nenhum material pode garantir vendas, porque o resultado depende da sua aplicação. O que a cartilha entrega é{" "}
        <strong>um caminho claro e organizado</strong>, com tudo o que você precisa fazer em cada etapa para chegar
        preparado à sua primeira venda.
      </>
    ),
  },
  {
    q: "Tem garantia?",
    a: (
      <>
        Com certeza!
        <br />
        Você tem <strong>garantia incondicional de 7 dias</strong>.
        <br />
        Leia a cartilha no seu ritmo e, se por qualquer motivo não for o que você esperava, é só pedir o reembolso
        total. Sem burocracia e sem perguntas.
      </>
    ),
  },
  {
    q: "E se eu tiver dúvidas?",
    a: (
      <>
        Nossa equipe oferece <strong>suporte dedicado</strong> por e-mail. É só entrar em contato pelo canal de suporte
        que vem com a sua compra e vamos te ajudar com prazer.
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Peças de clay                                                       */
/* ------------------------------------------------------------------ */

type SlabVariant = "hero" | "inside" | "why" | "guarantee";

/** Seção de identidade Shopee: topo branco que se abre em laranja (composição própria por variante). */
function ShopeeSlab({
  id,
  variant,
  className = "",
  children,
}: {
  id?: string;
  variant: SlabVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`sp-slab sp-slab--${variant} relative w-full overflow-hidden py-14 text-white ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/** Seção clara: equivale às seções de fundo branco da página original. */
function LightSection({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative w-full py-16 ${className}`}>
      {children}
    </section>
  );
}

function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[680px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/**
 * Grifo das headlines: faixa sólida com letras pretas.
 * on="light" → faixa laranja (sobre branco); on="orange" → faixa branca (sobre laranja).
 */
function Mark({ on, children }: { on: "light" | "orange"; children: ReactNode }) {
  return <span className={`sp-mark ${on === "orange" ? "sp-mark--on-orange" : ""}`}>{children}</span>;
}

/** Destaque dentro de parágrafos sobre o laranja: chip branco discreto. */
function SoftMark({ children }: { children: ReactNode }) {
  return <span className="sp-mark-soft">{children}</span>;
}

function CheckOrb({ size = "md" }: { size?: "sm" | "md" }) {
  const dims = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  return (
    <span
      className={`clay-orb inline-flex ${dims} shrink-0 items-center justify-center rounded-full bg-sp-go text-white`}
    >
      <Check className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={3.5} />
    </span>
  );
}

function CheckList({ items, onRed = false, className = "" }: { items: string[]; onRed?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckOrb />
          <span
            className={`pt-0.5 text-base font-medium leading-relaxed ${onRed ? "text-white" : "text-ink"}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CtaButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`clay-button ${display} inline-flex min-h-14 w-full items-center justify-center rounded-[6px] px-8 py-3 text-center text-lg font-extrabold sm:w-auto sm:text-xl ${className}`}
    >
      {children}
    </a>
  );
}

function IconOrb({ children, tone = "red" }: { children: ReactNode; tone?: "red" | "white" }) {
  const toneClass =
    tone === "red"
      ? "bg-gradient-to-br from-sp-400 to-sp-600 text-white"
      : "bg-gradient-to-br from-white to-sp-cream text-sp-600";
  return (
    <span className={`clay-orb inline-flex h-16 w-16 items-center justify-center rounded-full ${toneClass}`}>
      {children}
    </span>
  );
}

/** tone="dark" → preto profundo (fundo branco); tone="light" → branco (fundo laranja). */
function SectionTitle({ children, tone = "dark", className = "" }: { children: ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <h2
      className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${
        tone === "light" ? "sp-title--light" : "sp-title--dark"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/** Mockup principal: PNG com fundo transparente, mostrado direto, sem caixa atrás. */
function MainMockup({ priority = false, className = "" }: { priority?: boolean; className?: string }) {
  return (
    <Image
      src={`${IMG}/${MAIN_MOCKUP.img}`}
      alt={MAIN_PRODUCT_FULL}
      width={MAIN_MOCKUP.w}
      height={MAIN_MOCKUP.h}
      priority={priority}
      className={`mx-auto w-full ${className}`}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function ShopeePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Blobs de fundo (luz ambiente do canvas) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[60vh] w-[60vh] rounded-full bg-sp-500/10 blur-3xl" />
        <div className="absolute -right-[10%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-sp-400/10 blur-3xl" />
      </div>

      {/* Barra promocional fixa */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div
          className={`${display} flex h-11 w-full items-center justify-center gap-1.5 sp-topbar px-3 text-center text-[13px] font-extrabold text-white min-[400px]:text-[15px] sm:tracking-wide`}
        >
          Desconto de 67% apenas
          <span className="animate-clay-blink rounded-full bg-white px-2.5 py-0.5 text-sp-600 underline underline-offset-2">
            HOJE
          </span>
          nesta página!
        </div>
      </div>

      <main className="flex flex-col pt-11">
        {/* 1 · HERO */}
        <ShopeeSlab variant="hero" className="pt-6! sm:pt-12!">
          <Container className="flex flex-col items-center text-center">
            <h1 className={`${display} sp-hero-title`}>
              <span className="sp-hero-kicker">Cartilha Prática</span>
              <span className="sp-hero-lead">Como vender na</span>
              <span className="sp-hero-word">
                <span aria-hidden className="sp-hero-word-ghost">
                  SHOPEE
                </span>
                SHOPEE
              </span>
              <span className="sp-voucher-wrap">
                <span className="sp-voucher">Do zero à primeira venda</span>
              </span>
            </h1>

            <MainMockup priority className="mt-6" />

            {/* Âncora de preço já na primeira dobra (o Basic de R$ 10 é a porta de entrada). */}
            <div className="sp-price-tag mt-6">
              <span className="sp-price-tag-old">
                DE <s>R$ 97,00</s>
              </span>
              <span className="sp-price-tag-by">POR APENAS</span>
              <span className={`${display} sp-price-tag-new`}>
                <span className="sp-price-tag-cur">R$</span>10,00
              </span>
            </div>

            <p className="mt-8 text-lg font-medium leading-relaxed text-white/95 sm:text-xl">
              Conheça a <SoftMark>Cartilha Prática</SoftMark>, um passo a passo visual e organizado, com{" "}
              <strong className="font-extrabold">telas da Shopee ilustradas</strong>, exemplos e cálculos que mostram{" "}
              <SoftMark>o que fazer em cada etapa</SoftMark>, da criação da sua loja até a sua primeira venda.
            </p>

            <CheckList items={HERO_BULLETS} onRed className="mt-8 w-full text-left" />

            <CtaButton href="#offer" className="mt-10">
              Sim, quero a cartilha
            </CtaButton>
          </Container>
        </ShopeeSlab>

        {/* 2 · Tudo o que vem */}
        <LightSection>
          <Container>
            <h2 className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight sp-title--dark sm:text-4xl md:text-5xl`}>
              Veja tudo o que você vai aprender para <Mark on="light">começar a vender na Shopee!</Mark>
            </h2>
            <p className="mt-6 text-center text-lg font-medium leading-relaxed text-sp-ink-soft">
              Aprenda o passo a passo, desde a criação da sua loja até a preparação dos seus primeiros anúncios, vendas
              e envios, mesmo que você esteja começando do absoluto zero.
            </p>

            {/* Celular no meio da lista: pausa visual entre os dois blocos de itens. */}
            <CheckList items={INCLUDES.slice(0, 7)} className="mt-10" />
            {/* O braço sai pelo canto direito da imagem, então ela encosta na borda da tela. */}
            <div className="relative left-1/2 my-10 w-screen -translate-x-1/2">
              <Image
                src={`${IMG}/${PHONE_MOCKUP.img}`}
                alt="Mão segurando um celular com notificações de vendas realizadas na Shopee"
                width={PHONE_MOCKUP.w}
                height={PHONE_MOCKUP.h}
                sizes="(min-width: 700px) 640px, 92vw"
                className="sp-edge-mockup ml-auto w-[92%]"
              />
            </div>
            <CheckList items={INCLUDES.slice(7)} />
          </Container>
        </LightSection>

        {/* 3 · Selos de confiança */}
        <LightSection className="pt-0">
          <Container className="grid grid-cols-1 gap-5">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="clay-card flex flex-col items-center gap-3 rounded-[32px] px-6 py-6 text-center">
                {badge.icon ? (
                  <Image src={`${IMG}/${badge.icon}`} alt="" width={512} height={512} className="h-[84px] w-[84px]" />
                ) : (
                  <span className="clay-orb inline-flex h-[84px] w-[84px] items-center justify-center rounded-full bg-sp-go text-white">
                    <Check className="h-11 w-11" strokeWidth={3.5} />
                  </span>
                )}
                <span className={`${display} text-2xl font-extrabold text-ink`}>{badge.label}</span>
              </div>
            ))}
          </Container>
        </LightSection>

        {/* 4 · Slides + O que vem + 5 · Data + 6 · Bônus */}
        <ShopeeSlab id="inside" variant="inside">
          {/* Bloco branco dos 3 carrosséis; a onda laranja fica presa no fim dele. */}
          <div className="sp-inside-top -mt-14 pt-14">
            <Container>
              <SectionTitle tone="dark">
                Veja a cartilha <Mark on="light">por dentro</Mark>
              </SectionTitle>
              <p className="mt-3 text-center text-lg font-bold text-sp-ink-soft">Arraste para ver mais páginas →</p>
            </Container>
            <div className="mx-auto mt-8 w-full max-w-[600px] px-1.5 sm:px-10">
              <ShowcaseSlider slides={SHOWCASE} imgBase={IMG} altPrefix="Página da cartilha" />
            </div>

            <Container className="mt-16">
              <SectionTitle tone="dark">
                <Mark on="light">Módulos</Mark>
              </SectionTitle>
              <p className="mt-3 text-center text-lg font-bold text-sp-ink-soft">Arraste para ver todos os módulos →</p>
            </Container>
            <div className="mx-auto mt-8 w-full max-w-[600px] px-1.5 sm:px-10">
              <ShowcaseSlider slides={MODULES} imgBase={IMG} altPrefix="Capa do módulo" />
            </div>

            <Container className="mt-16">
              <SectionTitle tone="dark">
                <Mark on="light">Deveres de Casa</Mark> ao Final de Cada Módulo
              </SectionTitle>
              <p className="sp-note mx-auto mt-6 max-w-[560px]">
                Ao terminar cada módulo, você coloca em prática o que acabou de aprender. São exercícios, checklists e
                contas prontas para preencher, que transformam a leitura em ação na sua loja.
              </p>
              <p className="mt-6 text-center text-lg font-bold text-sp-ink-soft">Arraste para ver os deveres →</p>
            </Container>
            <div className="mx-auto mt-8 w-full max-w-[600px] px-1.5 sm:px-10">
              <ShowcaseSlider slides={HOMEWORK} imgBase={IMG} altPrefix="Página de exercícios" />
            </div>
          </div>

          {/* 5 · Data */}
          <Container className="mt-10 sm:mt-12">
            <div className="clay-red-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center">
              <h2 className={`${display} text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl`}>
                GARANTINDO <Mark on="orange">HOJE</Mark> VOCÊ TAMBÉM RECEBE
              </h2>
              <IconOrb tone="white">
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>
          </Container>

          {/* 6 · Bônus */}
          <Container className="mt-16">
            <SectionTitle tone="light">
              <Mark on="orange">5 BÔNUS EXCLUSIVOS</Mark> para acelerar a sua primeira venda
            </SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb tone="white">
                <Gift className="h-8 w-8" strokeWidth={2.5} />
              </IconOrb>
            </div>
            <p className="mt-8 text-center text-lg font-medium leading-relaxed text-white/95">
              Garantindo hoje, você não leva só a cartilha. Você também recebe{" "}
              <SoftMark>5 bônus exclusivos</SoftMark> que facilitam cada etapa: ideias de produtos, fornecedores,
              inteligência artificial para pesquisar e anunciar, e modelos prontos de promoções para atrair clientes.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {/* 1º bônus: layout próprio (título → imagem → subtítulo → descrição) */}
              <article className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 text-center sm:p-8">
                <h3 className={`${display} text-2xl font-extrabold leading-tight text-white`}>{FIRST_BONUS.title}</h3>
                <Image
                  src={`${IMG}/${FIRST_BONUS.img}`}
                  alt={FIRST_BONUS.title}
                  width={1306}
                  height={1205}
                  className="w-full"
                />
                <h4 className={`${display} text-xl font-extrabold text-white`}>Nunca mais fique sem saber o que vender:</h4>
                <p className="px-2 text-left text-base font-medium leading-relaxed text-white/90">
                  Uma lista com 50 ideias de produtos que já têm procura na Shopee, para você começar com mais segurança.
                  Use como ponto de partida para pesquisar, comparar com outras lojas e escolher os primeiros produtos que
                  vai testar na sua loja.
                </p>
                <BonusPrice price={FIRST_BONUS.price} />
              </article>

              {BONUSES.map((b) => (
                <article key={b.title} className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 pb-8 text-center sm:p-8">
                  <Image src={`${IMG}/${b.img}`} alt={b.title} width={1306} height={1205} className="mx-auto w-full" />
                  <h3 className={`${display} px-2 text-2xl font-extrabold leading-tight text-white`}>{b.title}</h3>
                  <BonusPrice price={b.price} />
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offer">Quero a cartilha</CtaButton>
            </div>
          </Container>
        </ShopeeSlab>

        {/* 8 · Por quê? + Para quem? */}
        <ShopeeSlab variant="why">
          <Container>
            <SectionTitle tone="dark">
              Por que a <Mark on="light">{MAIN_PRODUCT}</Mark> vai ser o seu passo a passo até a primeira venda
            </SectionTitle>

            <MainMockup className="mt-10" />

            <div className="clay-red-card mt-12 rounded-[32px] p-6 sm:p-8">
              <CheckList items={WHY} onRed />
            </div>

            <SectionTitle tone="light" className="mt-14">
              Para quem é a cartilha?
            </SectionTitle>

            <div className="clay-red-card mt-10 rounded-[32px] p-6 sm:p-8">
              <CheckList items={FOR_WHOM} onRed />
            </div>
          </Container>
        </ShopeeSlab>

        {/* 9 · Oferta */}
        <LightSection id="offer" className="scroll-mt-20">
          <Container>
            <SectionTitle>TEMOS ALGO ESPECIAL PARA VOCÊ</SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <OfferCard
              badge="🌟 Mais Vendido"
              tier="PACOTE PREMIUM"
              items={PREMIUM_ITEMS}
              oldPrice="DE R$ 97,00"
              price="27,00"
              href={CHECKOUT_PREMIUM}
              className="mt-14"
            />
            <OfferCard
              tier="PACOTE BÁSICO"
              items={BASIC_ITEMS}
              oldPrice="DE R$ 47,00"
              price="10,00"
              href={CHECKOUT_BASIC}
              className="mt-12"
            />
          </Container>
        </LightSection>

        {/* 10 · Garantia */}
        <ShopeeSlab variant="guarantee">
          <Container>
            <div className="clay-red-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center sm:px-10">
              <span className="clay-orb inline-flex h-[120px] w-[120px] items-center justify-center rounded-full bg-sp-go text-white">
                <ShieldCheck className="h-16 w-16" strokeWidth={2.25} />
              </span>
              <h2 className={`${display} text-3xl font-black tracking-tight sm:text-4xl sp-title--light`}>GARANTIA DE 7 DIAS</h2>
              <p className="text-lg font-medium leading-relaxed text-white/95">
                Compre com total tranquilidade. Depois da compra confirmada, você tem 7 dias para ler a cartilha, ver
                cada detalhe e, se sentir que não é o que esperava, pedir o reembolso total, sem burocracia.
              </p>
              <CtaButton href={CHECKOUT_PREMIUM} className="sm:min-w-[320px]">
                Comprar agora
              </CtaButton>
            </div>
          </Container>
        </ShopeeSlab>

        {/* 11 · FAQ */}
        <LightSection>
          <Container>
            <div className="text-center">
              <p className={`${display} clay-text-gradient text-7xl font-black leading-none tracking-tight sm:text-8xl`}>FAQ</p>
              <h2 className={`${display} mt-3 text-2xl font-black tracking-wide sp-title--dark sm:text-3xl`}>
                PERGUNTAS FREQUENTES
              </h2>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="clay-faq clay-card group rounded-[24px] px-5 py-1 hover:-translate-y-1"
                >
                  <summary className="flex min-h-16 cursor-pointer items-center gap-4 py-3">
                    <span className="clay-orb inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sp-400 to-sp-600 text-white">
                      <Plus className="faq-icon-closed h-5 w-5" strokeWidth={3} />
                      <Minus className="faq-icon-open h-5 w-5" strokeWidth={3} />
                    </span>
                    <span className={`${display} text-left text-lg font-extrabold leading-snug text-ink`}>{item.q}</span>
                  </summary>
                  <div className="pb-5 pl-14 pr-1 text-base font-medium leading-relaxed text-muted [&_strong]:font-bold [&_strong]:text-ink">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offer" className="sm:min-w-[320px]">
                Comprar agora
              </CtaButton>
            </div>
          </Container>
        </LightSection>

        {/* 12 · Rodapé */}
        <footer className="pb-6 text-center text-[13px]">
          <div className="font-medium">
            <a href="link-para-politica.html" className="mx-2.5 text-sp-link hover:underline">
              Política de Privacidade
            </a>
            <span className="text-muted">|</span>
            <a href="link-para-termos.html" className="mx-2.5 text-sp-link hover:underline">
              Termos de Uso
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-[560px] px-4 text-muted">
            Este produto não é afiliado, patrocinado ou endossado pela Shopee. Shopee é uma marca registrada de seu
            respectivo titular.
          </p>
          <p className="mt-2 text-muted">© 2026 Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
}

/** Card de plano: mesma estrutura no Premium e no Basic; muda selo, itens, preços e checkout. */
function OfferCard({
  badge,
  tier,
  items,
  oldPrice,
  price,
  href,
  className = "",
}: {
  badge?: string;
  tier: string;
  items: OfferItem[];
  oldPrice: string;
  price: string;
  href: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {badge && (
        <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
          <span
            className={`${display} clay-orb inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-br from-white to-sp-cream px-5 py-2.5 text-sm font-black tracking-wide text-sp-600`}
          >
            {badge}
          </span>
        </div>
      )}

      <div className="sp-slab sp-slab--offer relative overflow-hidden rounded-[48px] px-5 pb-10 pt-14 text-white sm:px-10">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h3 className={`${display} text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl sp-title--dark`}>
            {MAIN_PRODUCT.toUpperCase()}
            <br />
            <Mark on="light">{tier}</Mark>
          </h3>

          <MainMockup className="mt-8" />

          <div className="mt-8 w-full text-left">
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  {item.included ? <CheckOrb size="sm" /> : <XOrb />}
                  <span
                    className={`pt-0.5 text-[15px] font-bold leading-snug ${
                      item.included ? "text-white" : "text-white/70 line-through decoration-2"
                    }`}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className={`${display} mt-10 text-xl font-extrabold text-white/75 line-through decoration-2`}>{oldPrice}</p>
          <p className={`${display} mt-1 text-2xl font-black tracking-wide`}>SÓ HOJE</p>
          <p className={`${display} mt-1 whitespace-nowrap text-7xl font-black leading-none tracking-tight sm:text-8xl`}>
            <span className="mr-1 align-top text-3xl sm:text-4xl">R$</span>
            {price}
          </p>
          <p className="mt-6 text-sm font-bold text-white/90">Pagamento único</p>

          <CtaButton href={href} className="mt-6 sm:min-w-[320px]">
            Comprar agora
          </CtaButton>
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white/85">Pagamento 100% seguro</p>
        </div>
      </div>
    </div>
  );
}

/** Item que não vem no plano: X branco em círculo vermelho. */
function XOrb() {
  return (
    <span className="clay-orb inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
      <X className="h-3.5 w-3.5" strokeWidth={3.5} />
    </span>
  );
}

function BonusPrice({ price }: { price: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="clay-orb inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white to-sp-cream text-sp-600">
        <Gift className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <span className={`${display} text-lg font-extrabold text-white/75 line-through decoration-2`}>{price}</span>
      <span
        className={`${display} clay-orb inline-flex items-center rounded-full bg-sp-go px-5 py-1.5 text-base font-black tracking-widest text-white`}
      >
        GRÁTIS
      </span>
    </div>
  );
}
