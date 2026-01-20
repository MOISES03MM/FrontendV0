package com.example.backend.TicketDTO;

import java.util.Date;

import com.example.backend.models.EstadoTiket;
import com.example.backend.models.Prioridad;
import lombok.*;

@Getter
@Setter
public class CreateTicketDTO {
    private String titulo;
    private String cliente;
    private String descripcion;
    private Prioridad prioridad;
    private String asignado;
    private Date fecha;
    private EstadoTiket estado;
}
