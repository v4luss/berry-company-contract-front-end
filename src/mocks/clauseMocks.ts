import { ClauseTemplate, ContractTemplate } from '@/app/types/ClauseType';

const clause1Mock = {
	title: 'OBRIGAÇÕES DA CONTRATADA',
	body: `2.1. Desenvolver o projeto conforme as especificações acordadas com o CONTRATANTE. 

2.2. Entregar o projeto no prazo estipulado neste contrato. 

2.3. Manter o sigilo sobre os direitos autorais do site e o código-fonte do CONTRATANTE. 

2.4. Garantir suporte técnico conforme estipulado na cláusula de garantia e suporte. 2.5. Incluir o projeto no portfólio da CONTRATADA, salvo se houver acordo contrário por escrito.
`,
};

const clause2Mock = {
	title: 'PRAZO DE ENTREGA',
	body: `O prazo de entrega do serviço será determinado exclusivamente pela CONTRATADA, considerando a complexidade do projeto e outros fatores relevantes.
`,
};
const clause3Mock = {
	title: 'VALOR E FORMA DE PAGAMENTO',
	body: `4.1. O pagamento deverá ser efetuado 100% antes do início do projeto. 

4.3. As formas de pagamento aceitas são: Pix, cartão de crédito e boleto bancário.
`,
};
const clause4Mock = {
	title: 'GARANTIA E SUPORTE',
	body: `5.1. A CONTRATADA oferece garantia de 15 (quinze) dias para correções de erros relacionados ao desenvolvimento original. 

5.2. Suporte técnico adicional será oferecido mediante cobrança de taxas mensais conforme tabela vigente.
`,
};
const clause5Mock = {
	id: '123',
	contractId: '123',
	title: 'RESCISÃO',
	body: `6.1. O CONTRATANTE poderá rescindir o contrato em até 7 (sete) dias após a assinatura, com reembolso integral do valor pago. 

6.2. Após esse período, não haverá devolução de valores pagos.
`,
};
const clause6Mock = {
	title: 'DIREITOS DE USO E PORTFÓLIO',
	body: `7.1. A CONTRATADA terá o direito de incluir o projeto em seu portfólio. 

7.2. A CONTRATADA poderá incluir marca d'água nos serviços entregues. Caso o CONTRATANTE remova a marca d'água sem autorização prévia, estará sujeito a ações legais e não será mais aceito como cliente pela CONTRATADA.

`,
};
const clause7Mock = {
	title: 'MANUTENÇÃO',
	body: `8.1. Serviços de manutenção serão cobrados separadamente mediante taxas mensais acordadas entre as partes.
`,
};
const clause8Mock = {
	title: 'DISPOSIÇÕES GERAIS',
	body: `9.1. Qualquer modificação neste contrato só terá validade se feita por escrito e assinada por ambas as partes. 

9.2. O foro para dirimir quaisquer questões relativas a este contrato será o da comarca de Santa Barbará d'Oeste, com renúncia a qualquer outro, por mais privilegiado que seja.

`,
};
export const contractMock = {
	head: ['companyName: ', 'companyCnpj:', 'client:', 'clientCpf:'],
	clauses: [
		clause1Mock,
		clause2Mock,
		clause3Mock,
		clause4Mock,
		clause5Mock,
		clause6Mock,
		clause7Mock,
		clause8Mock,
	] as ClauseTemplate[],
} as ContractTemplate;
