package com.example.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.TicketDTO.CreateTicketDTO;
import com.example.backend.models.Ticket;
import com.example.backend.services.TicketService;


@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    private final TicketService ticketService;
    
    public TicketController(TicketService ticketService){
        this.ticketService = ticketService;
    }

    @PostMapping
    public ResponseEntity<Ticket> crearTicket(@RequestBody CreateTicketDTO data){
        Ticket ticketCreado = ticketService.crearTicket(data);

        return ResponseEntity.status(HttpStatus.CREATED).body(ticketCreado);
    }

    @GetMapping
    public ResponseEntity<List<Ticket>> obtenerTodos(){
        List<Ticket> lista = ticketService.obtenerTodos();
        return ResponseEntity.status(HttpStatus.OK).body(lista);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> obtenerPorId(@PathVariable Long id){
        Optional<Ticket> ticketEncontrado = ticketService.obtenerPorId(id);

        return ticketEncontrado.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }


}
