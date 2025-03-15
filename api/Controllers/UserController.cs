// package com.example.studentmanagementsystem.controller;

// import com.example.studentmanagementsystem.model.User;
// import com.example.studentmanagementsystem.service.UserService;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.web.bind.annotation.*;
// import java.util.List;

// @RestController
// @RequestMapping("/users")
// public class UserController {
//     private final UserService userService;

//     public UserController(UserService userService) {
//         this.userService = userService;
//     }

//     @PostMapping("/create")
//     public ResponseEntity<User> createUser(@RequestBody User user) {
//         return ResponseEntity.ok(userService.createUser(user));
//     }

//     @GetMapping("/list")
//     public ResponseEntity<List<User>> listUsers() {
//         return ResponseEntity.ok(userService.getAllUsers());
//     }

//     @PutMapping("/edit/{id}")
//     public ResponseEntity<User> editUser(@PathVariable Long id, @RequestBody User user) {
//         return ResponseEntity.ok(userService.updateUser(id, user));
//     }

//     @DeleteMapping("/delete/{id}")
//     public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
//         userService.deleteUser(id);
//         return ResponseEntity.noContent().build();
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<User> getUserById(@PathVariable Long id) {
//         Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//         String role = auth.getAuthorities().iterator().next().getAuthority();
//         String username = auth.getName();
//         User user = userService.getUserById(id);
        
//         if ("ROLE_ADMIN".equals(role) || user.getUsername().equals(username)) {
//             return ResponseEntity.ok(user);
//         }
//         return ResponseEntity.status(403).build();
//     }
// }
