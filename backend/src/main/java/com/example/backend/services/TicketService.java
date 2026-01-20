package com.example.backend.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.backend.Repository.TicketRepository;
import com.example.backend.TicketDTO.CreateTicketDTO;
import com.example.backend.models.Ticket;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public Ticket crearTicket(CreateTicketDTO datos) {
        Ticket nuevoTicket = new Ticket();
        nuevoTicket.setTitulo(datos.getTitulo());
        nuevoTicket.setCliente(datos.getCliente());
        nuevoTicket.setDescripcion(datos.getDescripcion());
        nuevoTicket.setPrioridad(datos.getPrioridad());
        nuevoTicket.setFecha(datos.getFecha());
        nuevoTicket.setEstado(datos.getEstado());
        nuevoTicket.setAsignado(datos.getAsignado());

        return ticketRepository.save(nuevoTicket);
    }

    public List<Ticket> obtenerTodos() {
        List<Ticket> listaUsuario = new ArrayList<>();
        listaUsuario = ticketRepository.findAll();
        return listaUsuario;
    }

    public Optional<Ticket> obtenerPorId(Long id) {
      return ticketRepository.findById(id);
  }
}
