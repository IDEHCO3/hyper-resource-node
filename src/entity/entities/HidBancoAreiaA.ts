import { Column, Entity, Index } from "typeorm";

@Index("hid_banco_areia_a_pkey", ["idObjeto"], { unique: true })
@Entity("hid_banco_areia_a", { schema: "bcim" })
export class HidBancoAreiaA {
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
    name: "tipobanco",
    nullable: true,
    length: 14,
  })
  tipobanco: string | null;

  @Column("character varying", {
    name: "situacaoemagua",
    nullable: true,
    length: 17,
  })
  situacaoemagua: string | null;

  @Column("character varying", {
    name: "materialpredominante",
    nullable: true,
    length: 27,
  })
  materialpredominante: string | null;

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
