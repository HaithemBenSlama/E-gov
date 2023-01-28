package com.example.demo.contratmariage;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v/contratmariage")
public class ContratMariageController {

    private final ContratMariageService contratService;

    @Autowired
    public ContratMariageController(ContratMariageService contratService){
        this.contratService=contratService;
    }

    @GetMapping
    public List<ContratMariage> getContratMariages(){
        return contratService.getContratMariages();
    }

    @PostMapping
    public void registerContrat(@RequestBody ContratMariage contrat){
        contratService.saveContratMariage(contrat);
    }

    @DeleteMapping(path="{contratId}")
    public void deleteContrat(@PathVariable("contratId") Long contratId){
        contratService.deleteContratMariage(contratId);
    }

    @PutMapping(path ="{contratId}")
    public void updateContrat(
            @PathVariable("contratId") Long contratId,
            @RequestParam(required=false) LocalDate datem){
        contratService.updateContratMariage(contratId,datem);
    }
}
