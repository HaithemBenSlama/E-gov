package com.example.demo.diplome;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v/diplome")
public class DiplomeController {

    private final DiplomeService diplomeService;

    @Autowired
    public DiplomeController(DiplomeService diplomeService){
        this.diplomeService=diplomeService;
    }

    @GetMapping
    public List<Diplome> getDiploms(){
        return diplomeService.getDiploms();
    }

    @PostMapping
    public void registerDiplome(@RequestBody Diplome diplome){
        diplomeService.saveDiplome(diplome);
    }

    @DeleteMapping(path="{diplomeId}")
    public void deleteDiplome(@PathVariable("diplomeId") Long diplomeId){
        diplomeService.deleteDiplome(diplomeId);
    }

    @PutMapping(path ="{diplomerId}")
    public void updateDiplome(
            @PathVariable("diplomerId") Long diplomeId,
            @RequestParam(required=false) String lastName,
            @RequestParam(required=false) String firstName){
        diplomeService.updateDiplome(diplomeId,lastName,firstName);
    }

}
