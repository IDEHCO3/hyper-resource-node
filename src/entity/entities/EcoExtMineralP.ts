import { Column, Entity, Index } from "typeorm";

@Index("eco_ext_mineral_p_pkey", ["idObjeto"], { unique: true })
@Entity("eco_ext_mineral_p", { schema: "bcim" })
export class EcoExtMineralP {
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

  @Column("character varying", {
    name: "tiposecaocnae",
    nullable: true,
    length: 50,
  })
  tiposecaocnae: string | null;

  @Column("character varying", {
    name: "operacional",
    nullable: true,
    length: 12,
  })
  operacional: string | null;

  @Column("text", { name: "situacaofisica", nullable: true })
  situacaofisica: string | null;

  @Column("character varying", {
    name: "tipoextmin",
    nullable: true,
    length: 20,
  })
  tipoextmin: string | null;

  @Column("character varying", {
    name: "tipoprodutoresiduo",
    nullable: true,
    length: 40,
  })
  tipoprodutoresiduo: string | null;

  @Column("character varying", {
    name: "tipopocomina",
    nullable: true,
    length: 15,
  })
  tipopocomina: string | null;

  @Column("character varying", {
    name: "procextracao",
    nullable: true,
    length: 12,
  })
  procextracao: string | null;

  @Column("character varying", {
    name: "formaextracao",
    nullable: true,
    length: 12,
  })
  formaextracao: string | null;

  @Column("character varying", {
    name: "atividade",
    nullable: true,
    length: 12,
  })
  atividade: string | null;

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
