package com.example.demo.permis;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v/permis")
public class PermisController {

    private final PermisService permisService;

    @Autowired
    public PermisController(PermisService permisService){
        this.permisService=permisService;
    }

    @GetMapping
    public List<Permis> getPermis(){
        return permisService.getPermis();
    }

    @PostMapping
    public void registerPermis(@RequestBody Permis permis){
        permisService.savePermis(permis);
    }

    @DeleteMapping(path="{permisId}")
    public void deletePermis(@PathVariable("permisId") Long permisId){
        permisService.deletePermis(permisId);
    }

    @PutMapping(path ="{permisId}")
    public void updateCin(
            @PathVariable("permisId") Long permisId,
            @RequestParam(required=false) String numero){
        permisService.updatePermis(permisId,numero);
    }

}
