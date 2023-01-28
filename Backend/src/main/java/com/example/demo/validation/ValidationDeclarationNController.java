package com.example.demo.validation;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("api/v/validation/declaration")
public class ValidationDeclarationNController {

    private final ValidationService validationService;

    @Autowired
    public ValidationDeclarationNController(ValidationService validationService){
        this.validationService=validationService;
    }

    @GetMapping
    public List<Validation> getValidationbyType(){
        return validationService.getTypeRequests(ValidationType.DECLARATIONNAISSANCE);
    }

    @GetMapping(path ="v1/{ValidationId}")
    public Optional<Validation> getValidationDeclarationNbyId(
            @PathVariable("ValidationId") Long vid){
        return validationService.getValidationById(vid);
    }

    @PostMapping
    public void registerValidationPermis(@RequestBody Validation validation){
        validationService.addRequest(validation);
    }

    @PutMapping(path ="{validationId}/{etat}")
    public void validationState(
            @PathVariable("validationId") Long validationId,
            @PathVariable("etat") Etat etat){
        validationService.updateValidationState(validationId,etat);
    }

    @DeleteMapping(path="{validationId}")
    public void deleteValidation(@PathVariable("validationId") Long validationId){
        validationService.deleteValidationRequest(validationId);
    }







}
