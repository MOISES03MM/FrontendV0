package com.example.backend.models;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Setter
@Getter
@NoArgsConstructor
public class Ticket {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column
    private String titulo;

    @Column
    private String cliente;

    @Column
    private String descripcion;

    @Enumerated(EnumType.STRING)
    @Column
    private Prioridad prioridad;

    @Column
    private String asignado;

    @Column
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date fecha;

    @Enumerated(EnumType.STRING)
    @Column
    private EstadoTiket estado;
}



