package com.example.demo.declarationnaissance;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v/declarationnaissance")
public class NaissanceController {

    private final NaissanceService naissanceService;

    @Autowired
    public NaissanceController(NaissanceService naissanceService){
        this.naissanceService=naissanceService;
    }

    @GetMapping
    public List<DeclarationNaissance> getNaissances(){
        return naissanceService.getNaissances();
    }

    @PostMapping
    public void registerNaissance(@RequestBody DeclarationNaissance naissance){
        naissanceService.saveNaissance(naissance);
    }

    @DeleteMapping(path="{naissanceId}")
    public void deleteNaissance(@PathVariable("naissanceId") Long naissanceId){
        naissanceService.deleteNaissance(naissanceId);
    }

    @PutMapping(path ="{naissanceId}")
    public void updateNaissance(
            @PathVariable("naissanceId") Long naissanceId,
            @RequestParam(required=false) String lastName,
            @RequestParam(required=false) String firstName){
        naissanceService.updateNaissance(naissanceId,lastName,firstName);
    }
}
