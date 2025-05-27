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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido." }),
  password: z.string().min(1, { message: "Senha é obrigatória." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { login, loading, error } = useAuth();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormValues) => {
    await login(data.email, data.password);
    // Modal closing will be handled by parent component based on auth state
  };

  return (
    <Card className="bg-gradient-to-b from-gray-900/90 to-black/90 border border-red-500/30 rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-black text-white tracking-tight animate-title-emerge">Acesse sua Conta</CardTitle>
        <CardDescription className="text-center text-gray-400 mt-2">Entre para acessar o conteúdo exclusivo do evento.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" {...field} className="bg-black/60 border border-red-500/30 focus:border-red-500 text-white placeholder-gray-400" />
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
                  <FormLabel className="text-white font-semibold">Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} className="bg-black/60 border border-red-500/30 focus:border-red-500 text-white placeholder-gray-400" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && <p className="text-sm font-medium text-red-400 text-center animate-pulse-text">{error}</p>}
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-3 rounded-lg shadow-md animate-cta-pulse" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </Form>
        <div className="mt-6 flex flex-col gap-2 items-center">
          <span className="text-gray-400 text-sm">Ainda não tem uma conta?</span>
          <Button
            onClick={() => navigate('/register')}
            className="w-full bg-neutral-900 border border-red-500/40 hover:bg-red-700 hover:border-red-500 transition-colors text-white font-bold text-lg px-8 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Criar Conta
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
