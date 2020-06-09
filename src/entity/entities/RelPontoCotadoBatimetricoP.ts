import { Column, Entity, Index } from "typeorm";

@Index("rel_ponto_cotado_batimetrico_p_pkey", ["idObjeto"], { unique: true })
@Entity("rel_ponto_cotado_batimetrico_p", { schema: "bcim" })
export class RelPontoCotadoBatimetricoP {
  @Column("integer", { primary: true, name: "id_objeto" })
  idObjeto: number;

  @Column("double precision", {
    name: "profundidade",
    nullable: true,
    precision: 53,
  })
  profundidade: number | null;

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
