package com.example.demo.registration.token;

import com.example.demo.user.Userego;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class ConfirmationToken {

    @Id
    @SequenceGenerator(
            name="confirmation_token_sequence",
            sequenceName="confirmation_token_user_sequence",
            allocationSize=1
    )
    @GeneratedValue(
            strategy= GenerationType.SEQUENCE,
            generator="confirmation_token_sequence"
    )
    private Long id;
    @Column(nullable = false)
    private String token;
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Column(nullable = false)

    private LocalDateTime expiresAt;
    private LocalDateTime confirmedAt;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name="app_user_id"
    )
    private Userego appUser;

    public ConfirmationToken(String token, LocalDateTime createdAt, LocalDateTime expiredAt,Userego appUser) {
        this.token = token;
        this.createdAt = createdAt;
        this.expiresAt = expiredAt;

        this.appUser = appUser;
    }
}
