import { Column, Entity, Index } from "typeorm";

@Index("enc_termeletrica_p_pkey", ["idObjeto"], { unique: true })
@Entity("enc_termeletrica_p", { schema: "bcim" })
export class EncTermeletricaP {
  @Column("integer", { primary: true, name: "id_objeto" })
  idObjeto: number;

  @Column("character varying", { name: "nome", nullable: true, length: 100 })
  nome: string | null;

  @Column("character varying", {
    name: "nomeabrev",
    nullable: true,
    length: 50,
  })
  nomeabrev: string | null;

  @Column("character varying", {
    name: "geometriaaproximada",
    nullable: true,
    length: 3,
  })
  geometriaaproximada: string | null;

  @Column("integer", { name: "potenciaoutorgada", nullable: true })
  potenciaoutorgada: number | null;

  @Column("integer", { name: "potenciafiscalizada", nullable: true })
  potenciafiscalizada: number | null;

  @Column("character varying", {
    name: "combrenovavel",
    nullable: true,
    length: 3,
  })
  combrenovavel: string | null;

  @Column("character varying", {
    name: "tipomaqtermica",
    nullable: true,
    length: 33,
  })
  tipomaqtermica: string | null;

  @Column("character varying", { name: "geracao", nullable: true, length: 20 })
  geracao: string | null;

  @Column("character varying", {
    name: "tipocombustivel",
    nullable: true,
    length: 17,
  })
  tipocombustivel: string | null;

  @Column("character varying", {
    name: "operacional",
    nullable: true,
    length: 12,
  })
  operacional: string | null;

  @Column("text", { name: "situacaofisica", nullable: true })
  situacaofisica: string | null;

  @Column("geometry", { name: "geom", nullable: true })
  geom: string | null;

  @Column("integer", { name: "id_produtor", nullable: true })
  idProdutor: number | null;

  @Column("integer", { name: "id_elementoprodutor", nullable: true })
  idElementoprodutor: number | null;

  @Column("integer", { name: "cd_insumo_orgao", nullable: true })
  cdInsumoOrgao: number | null;

  @Column("smallint", { name: "nr_insumo_mes", nullable: true })
  nrInsumoMes: number | null;

  @Column("smallint", { name: "nr_insumo_ano", nullable: true })
  nrInsumoAno: number | null;

  @Column("character varying", {
    name: "tx_insumo_documento",
    nullable: true,
    length: 60,
  })
  txInsumoDocumento: string | null;
}
