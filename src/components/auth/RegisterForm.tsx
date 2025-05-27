import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const registerSchema = z.object({
  fullName: z.string().min(3, { message: "Nome completo deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Email inválido." }),
  password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres." }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "As senhas não coincidem.",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const { signup, loading, error } = useAuth();
  const navigate = useNavigate();
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    const success = await signup(data.email, data.password, data.fullName);
    if (success) {
      navigate("/dashboard");
    }
    // Error handling is done via the 'error' state from useAuth
  };

  return (
    <div className="w-full max-w-md mx-auto bg-black/90 rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col gap-6 border border-gray-800">
      {/* Botão Google mockado */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 py-3 mb-2 rounded-xl bg-white/5 border border-gray-700 hover:bg-white/10 transition-all duration-150 shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
        style={{ minHeight: 48 }}
        disabled
      >
        <img src="/lovable-uploads/logar-com-google-pedro-bertotto.png" alt="Google" className="h-6 w-6" />
        <span className="text-sm font-semibold text-gray-100 tracking-wide">Conectar com Google</span>
      </button>
      <Card className="bg-transparent border-none shadow-none p-0">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-xl font-bold text-white mb-1 tracking-tight font-[Montserrat,sans-serif]">Criar Conta</CardTitle>
          <CardDescription className="text-sm text-gray-400 font-mono">Insira seus dados para criar uma nova conta.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 text-xs font-semibold tracking-wide">Nome Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} className="bg-black/60 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-400 transition-all duration-150" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 text-xs font-semibold tracking-wide">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" {...field} className="bg-black/60 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-400 transition-all duration-150" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 text-xs font-semibold tracking-wide">Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Sua senha" {...field} className="bg-black/60 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-400 transition-all duration-150" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 text-xs font-semibold tracking-wide">Confirmar Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Confirme sua senha" {...field} className="bg-black/60 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-400 transition-all duration-150" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {error && <p className="text-xs font-medium text-red-500 bg-red-500/10 rounded-lg px-3 py-2">{error}</p>}
              <Button type="submit" className="w-full rounded-xl bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 text-white font-bold py-3 shadow-lg hover:from-red-500 hover:to-purple-500 transition-all duration-200 text-base mt-2" disabled={loading}>
                {loading ? "Criando conta..." : "Criar Conta"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col items-center p-0 mt-4">
          <p className="text-xs text-gray-500 font-mono">
            Já possui uma conta?{" "}
            <Button variant="link" asChild className="p-0 h-auto text-red-400 font-semibold">
              <Link to="/">
                Faça login
              </Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
