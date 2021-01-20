PGDMP     6    *                 y            qfsjgwmf     11.9 (Ubuntu 11.9-1.pgdg20.04+1)    13.1 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    2801660    qfsjgwmf    DATABASE     ]   CREATE DATABASE qfsjgwmf WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE qfsjgwmf;
                qfsjgwmf    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    24            �            1259    2801886    adeia_eidikoy_skopoy    TABLE     ?  CREATE TABLE public.adeia_eidikoy_skopoy (
    id integer NOT NULL,
    from_time date NOT NULL,
    to_time date NOT NULL,
    created_at timestamp with time zone NOT NULL,
    children jsonb[] NOT NULL,
    status smallint NOT NULL,
    company_id character varying(100) NOT NULL,
    employee_id integer NOT NULL
);
 (   DROP TABLE public.adeia_eidikoy_skopoy;
       public            qfsjgwmf    false    24            �            1259    2801884    adeia_eidikoy_skopoy_id_seq    SEQUENCE     �   CREATE SEQUENCE public.adeia_eidikoy_skopoy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.adeia_eidikoy_skopoy_id_seq;
       public          qfsjgwmf    false    247    24            �           0    0    adeia_eidikoy_skopoy_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.adeia_eidikoy_skopoy_id_seq OWNED BY public.adeia_eidikoy_skopoy.id;
          public          qfsjgwmf    false    246            �            1259    2801878    adeia_ergasias    TABLE       CREATE TABLE public.adeia_ergasias (
    id integer NOT NULL,
    from_time date NOT NULL,
    to_time date NOT NULL,
    created_at timestamp with time zone NOT NULL,
    company_id character varying(100) NOT NULL,
    employee_id integer NOT NULL,
    status smallint NOT NULL
);
 "   DROP TABLE public.adeia_ergasias;
       public            qfsjgwmf    false    24            �            1259    2801876    adeia_ergasias_id_seq    SEQUENCE     �   CREATE SEQUENCE public.adeia_ergasias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.adeia_ergasias_id_seq;
       public          qfsjgwmf    false    24    245            �           0    0    adeia_ergasias_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.adeia_ergasias_id_seq OWNED BY public.adeia_ergasias.id;
          public          qfsjgwmf    false    244            �            1259    2801870    anastoli_ergasias    TABLE       CREATE TABLE public.anastoli_ergasias (
    id integer NOT NULL,
    from_time date NOT NULL,
    to_time date NOT NULL,
    created_at timestamp with time zone NOT NULL,
    company_id character varying(100) NOT NULL,
    employee_id integer NOT NULL,
    status smallint NOT NULL
);
 %   DROP TABLE public.anastoli_ergasias;
       public            qfsjgwmf    false    24            �            1259    2801868    anastoli_ergasias_id_seq    SEQUENCE     �   CREATE SEQUENCE public.anastoli_ergasias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.anastoli_ergasias_id_seq;
       public          qfsjgwmf    false    24    243            �           0    0    anastoli_ergasias_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.anastoli_ergasias_id_seq OWNED BY public.anastoli_ergasias.id;
          public          qfsjgwmf    false    242            �            1259    2829491    appointment    TABLE     �   CREATE TABLE public.appointment (
    id integer NOT NULL,
    email character varying(254) NOT NULL,
    phone character varying(50) NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL,
    user_id integer
);
    DROP TABLE public.appointment;
       public            qfsjgwmf    false    24            �            1259    2829489    appointment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.appointment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.appointment_id_seq;
       public          qfsjgwmf    false    24    254            �           0    0    appointment_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.appointment_id_seq OWNED BY public.appointment.id;
          public          qfsjgwmf    false    253            �            1259    2801694 
   auth_group    TABLE     f   CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);
    DROP TABLE public.auth_group;
       public            qfsjgwmf    false    24            �            1259    2801692    auth_group_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.auth_group_id_seq;
       public          qfsjgwmf    false    229    24            �           0    0    auth_group_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;
          public          qfsjgwmf    false    228            �            1259    2801704    auth_group_permissions    TABLE     �   CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);
 *   DROP TABLE public.auth_group_permissions;
       public            qfsjgwmf    false    24            �            1259    2801702    auth_group_permissions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.auth_group_permissions_id_seq;
       public          qfsjgwmf    false    24    231            �           0    0    auth_group_permissions_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;
          public          qfsjgwmf    false    230            �            1259    2801686    auth_permission    TABLE     �   CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);
 #   DROP TABLE public.auth_permission;
       public            qfsjgwmf    false    24            �            1259    2801684    auth_permission_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.auth_permission_id_seq;
       public          qfsjgwmf    false    227    24            �           0    0    auth_permission_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;
          public          qfsjgwmf    false    226            �            1259    2801850    authtoken_token    TABLE     �   CREATE TABLE public.authtoken_token (
    key character varying(40) NOT NULL,
    created timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);
 #   DROP TABLE public.authtoken_token;
       public            qfsjgwmf    false    24            �            1259    2801736    company    TABLE     J   CREATE TABLE public.company (
    name character varying(100) NOT NULL
);
    DROP TABLE public.company;
       public            qfsjgwmf    false    24            �            1259    2801828    django_admin_log    TABLE     �  CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);
 $   DROP TABLE public.django_admin_log;
       public            qfsjgwmf    false    24            �            1259    2801826    django_admin_log_id_seq    SEQUENCE     �   CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.django_admin_log_id_seq;
       public          qfsjgwmf    false    24    240            �           0    0    django_admin_log_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;
          public          qfsjgwmf    false    239            �            1259    2801676    django_content_type    TABLE     �   CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);
 '   DROP TABLE public.django_content_type;
       public            qfsjgwmf    false    24            �            1259    2801674    django_content_type_id_seq    SEQUENCE     �   CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.django_content_type_id_seq;
       public          qfsjgwmf    false    24    225            �           0    0    django_content_type_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;
          public          qfsjgwmf    false    224            �            1259    2801665    django_migrations    TABLE     �   CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);
 %   DROP TABLE public.django_migrations;
       public            qfsjgwmf    false    24            �            1259    2801663    django_migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.django_migrations_id_seq;
       public          qfsjgwmf    false    24    223            �           0    0    django_migrations_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;
          public          qfsjgwmf    false    222            �            1259    2801934    django_session    TABLE     �   CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);
 "   DROP TABLE public.django_session;
       public            qfsjgwmf    false    24                        1259    2884208 
   tilergasia    TABLE       CREATE TABLE public.tilergasia (
    id integer NOT NULL,
    from_time date NOT NULL,
    to_time date NOT NULL,
    created_at timestamp with time zone NOT NULL,
    status smallint NOT NULL,
    company_id character varying(100) NOT NULL,
    employee_id integer NOT NULL
);
    DROP TABLE public.tilergasia;
       public            qfsjgwmf    false    24            �            1259    2884206    tilergasia_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tilergasia_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.tilergasia_id_seq;
       public          qfsjgwmf    false    256    24            �           0    0    tilergasia_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.tilergasia_id_seq OWNED BY public.tilergasia.id;
          public          qfsjgwmf    false    255            �            1259    2801946     token_blacklist_blacklistedtoken    TABLE     �   CREATE TABLE public.token_blacklist_blacklistedtoken (
    id integer NOT NULL,
    blacklisted_at timestamp with time zone NOT NULL,
    token_id integer NOT NULL
);
 4   DROP TABLE public.token_blacklist_blacklistedtoken;
       public            qfsjgwmf    false    24            �            1259    2801944 '   token_blacklist_blacklistedtoken_id_seq    SEQUENCE     �   CREATE SEQUENCE public.token_blacklist_blacklistedtoken_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 >   DROP SEQUENCE public.token_blacklist_blacklistedtoken_id_seq;
       public          qfsjgwmf    false    250    24            �           0    0 '   token_blacklist_blacklistedtoken_id_seq    SEQUENCE OWNED BY     s   ALTER SEQUENCE public.token_blacklist_blacklistedtoken_id_seq OWNED BY public.token_blacklist_blacklistedtoken.id;
          public          qfsjgwmf    false    249            �            1259    2801954     token_blacklist_outstandingtoken    TABLE       CREATE TABLE public.token_blacklist_outstandingtoken (
    id integer NOT NULL,
    token text NOT NULL,
    created_at timestamp with time zone,
    expires_at timestamp with time zone NOT NULL,
    user_id integer,
    jti character varying(255) NOT NULL
);
 4   DROP TABLE public.token_blacklist_outstandingtoken;
       public            qfsjgwmf    false    24            �            1259    2801952 '   token_blacklist_outstandingtoken_id_seq    SEQUENCE     �   CREATE SEQUENCE public.token_blacklist_outstandingtoken_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 >   DROP SEQUENCE public.token_blacklist_outstandingtoken_id_seq;
       public          qfsjgwmf    false    24    252            �           0    0 '   token_blacklist_outstandingtoken_id_seq    SEQUENCE OWNED BY     s   ALTER SEQUENCE public.token_blacklist_outstandingtoken_id_seq OWNED BY public.token_blacklist_outstandingtoken.id;
          public          qfsjgwmf    false    251            �            1259    2801743    user    TABLE     r  CREATE TABLE public."user" (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    amka character varying(10) NOT NULL,
    afm character varying(10) NOT NULL,
    username character varying(30) NOT NULL,
    email character varying(254) NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    phone character varying(50) NOT NULL,
    date_of_birth date,
    role character varying(50) NOT NULL,
    is_staff boolean NOT NULL,
    company_id character varying(100) NOT NULL
);
    DROP TABLE public."user";
       public            qfsjgwmf    false    24            �            1259    2801766    user_groups    TABLE     z   CREATE TABLE public.user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);
    DROP TABLE public.user_groups;
       public            qfsjgwmf    false    24            �            1259    2801764    user_groups_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.user_groups_id_seq;
       public          qfsjgwmf    false    236    24            �           0    0    user_groups_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.user_groups_id_seq OWNED BY public.user_groups.id;
          public          qfsjgwmf    false    235            �            1259    2801741    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          qfsjgwmf    false    24    234            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          qfsjgwmf    false    233            �            1259    2801774    user_user_permissions    TABLE     �   CREATE TABLE public.user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);
 )   DROP TABLE public.user_user_permissions;
       public            qfsjgwmf    false    24            �            1259    2801772    user_user_permissions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.user_user_permissions_id_seq;
       public          qfsjgwmf    false    238    24            �           0    0    user_user_permissions_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.user_user_permissions_id_seq OWNED BY public.user_user_permissions.id;
          public          qfsjgwmf    false    237            �           2604    2801889    adeia_eidikoy_skopoy id    DEFAULT     �   ALTER TABLE ONLY public.adeia_eidikoy_skopoy ALTER COLUMN id SET DEFAULT nextval('public.adeia_eidikoy_skopoy_id_seq'::regclass);
 F   ALTER TABLE public.adeia_eidikoy_skopoy ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    246    247    247            �           2604    2801881    adeia_ergasias id    DEFAULT     v   ALTER TABLE ONLY public.adeia_ergasias ALTER COLUMN id SET DEFAULT nextval('public.adeia_ergasias_id_seq'::regclass);
 @   ALTER TABLE public.adeia_ergasias ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    245    244    245            �           2604    2801873    anastoli_ergasias id    DEFAULT     |   ALTER TABLE ONLY public.anastoli_ergasias ALTER COLUMN id SET DEFAULT nextval('public.anastoli_ergasias_id_seq'::regclass);
 C   ALTER TABLE public.anastoli_ergasias ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    242    243    243            �           2604    2829494    appointment id    DEFAULT     p   ALTER TABLE ONLY public.appointment ALTER COLUMN id SET DEFAULT nextval('public.appointment_id_seq'::regclass);
 =   ALTER TABLE public.appointment ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    253    254    254            �           2604    2801697    auth_group id    DEFAULT     n   ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);
 <   ALTER TABLE public.auth_group ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    228    229    229            �           2604    2801707    auth_group_permissions id    DEFAULT     �   ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);
 H   ALTER TABLE public.auth_group_permissions ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    231    230    231            �           2604    2801689    auth_permission id    DEFAULT     x   ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);
 A   ALTER TABLE public.auth_permission ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    227    226    227            �           2604    2801831    django_admin_log id    DEFAULT     z   ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);
 B   ALTER TABLE public.django_admin_log ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    239    240    240            �           2604    2801679    django_content_type id    DEFAULT     �   ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);
 E   ALTER TABLE public.django_content_type ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    225    224    225            �           2604    2801668    django_migrations id    DEFAULT     |   ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);
 C   ALTER TABLE public.django_migrations ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    223    222    223            �           2604    2884211    tilergasia id    DEFAULT     n   ALTER TABLE ONLY public.tilergasia ALTER COLUMN id SET DEFAULT nextval('public.tilergasia_id_seq'::regclass);
 <   ALTER TABLE public.tilergasia ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    255    256    256            �           2604    2801949 #   token_blacklist_blacklistedtoken id    DEFAULT     �   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken ALTER COLUMN id SET DEFAULT nextval('public.token_blacklist_blacklistedtoken_id_seq'::regclass);
 R   ALTER TABLE public.token_blacklist_blacklistedtoken ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    250    249    250            �           2604    2801957 #   token_blacklist_outstandingtoken id    DEFAULT     �   ALTER TABLE ONLY public.token_blacklist_outstandingtoken ALTER COLUMN id SET DEFAULT nextval('public.token_blacklist_outstandingtoken_id_seq'::regclass);
 R   ALTER TABLE public.token_blacklist_outstandingtoken ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    251    252    252            �           2604    2801746    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    233    234    234            �           2604    2801769    user_groups id    DEFAULT     p   ALTER TABLE ONLY public.user_groups ALTER COLUMN id SET DEFAULT nextval('public.user_groups_id_seq'::regclass);
 =   ALTER TABLE public.user_groups ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    236    235    236            �           2604    2801777    user_user_permissions id    DEFAULT     �   ALTER TABLE ONLY public.user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.user_user_permissions_id_seq'::regclass);
 G   ALTER TABLE public.user_user_permissions ALTER COLUMN id DROP DEFAULT;
       public          qfsjgwmf    false    238    237    238            �          0    2801886    adeia_eidikoy_skopoy 
   TABLE DATA           }   COPY public.adeia_eidikoy_skopoy (id, from_time, to_time, created_at, children, status, company_id, employee_id) FROM stdin;
    public          qfsjgwmf    false    247            �          0    2801878    adeia_ergasias 
   TABLE DATA           m   COPY public.adeia_ergasias (id, from_time, to_time, created_at, company_id, employee_id, status) FROM stdin;
    public          qfsjgwmf    false    245            �          0    2801870    anastoli_ergasias 
   TABLE DATA           p   COPY public.anastoli_ergasias (id, from_time, to_time, created_at, company_id, employee_id, status) FROM stdin;
    public          qfsjgwmf    false    243            �          0    2829491    appointment 
   TABLE DATA           N   COPY public.appointment (id, email, phone, date, "time", user_id) FROM stdin;
    public          qfsjgwmf    false    254            �          0    2801694 
   auth_group 
   TABLE DATA           .   COPY public.auth_group (id, name) FROM stdin;
    public          qfsjgwmf    false    229            �          0    2801704    auth_group_permissions 
   TABLE DATA           M   COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
    public          qfsjgwmf    false    231            �          0    2801686    auth_permission 
   TABLE DATA           N   COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
    public          qfsjgwmf    false    227            �          0    2801850    authtoken_token 
   TABLE DATA           @   COPY public.authtoken_token (key, created, user_id) FROM stdin;
    public          qfsjgwmf    false    241            �          0    2801736    company 
   TABLE DATA           '   COPY public.company (name) FROM stdin;
    public          qfsjgwmf    false    232            �          0    2801828    django_admin_log 
   TABLE DATA           �   COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
    public          qfsjgwmf    false    240            �          0    2801676    django_content_type 
   TABLE DATA           C   COPY public.django_content_type (id, app_label, model) FROM stdin;
    public          qfsjgwmf    false    225            �          0    2801665    django_migrations 
   TABLE DATA           C   COPY public.django_migrations (id, app, name, applied) FROM stdin;
    public          qfsjgwmf    false    223            �          0    2801934    django_session 
   TABLE DATA           P   COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
    public          qfsjgwmf    false    248            �          0    2884208 
   tilergasia 
   TABLE DATA           i   COPY public.tilergasia (id, from_time, to_time, created_at, status, company_id, employee_id) FROM stdin;
    public          qfsjgwmf    false    256            �          0    2801946     token_blacklist_blacklistedtoken 
   TABLE DATA           X   COPY public.token_blacklist_blacklistedtoken (id, blacklisted_at, token_id) FROM stdin;
    public          qfsjgwmf    false    250            �          0    2801954     token_blacklist_outstandingtoken 
   TABLE DATA           k   COPY public.token_blacklist_outstandingtoken (id, token, created_at, expires_at, user_id, jti) FROM stdin;
    public          qfsjgwmf    false    252            �          0    2801743    user 
   TABLE DATA           �   COPY public."user" (id, password, last_login, is_superuser, amka, afm, username, email, first_name, last_name, phone, date_of_birth, role, is_staff, company_id) FROM stdin;
    public          qfsjgwmf    false    234            �          0    2801766    user_groups 
   TABLE DATA           <   COPY public.user_groups (id, user_id, group_id) FROM stdin;
    public          qfsjgwmf    false    236            �          0    2801774    user_user_permissions 
   TABLE DATA           K   COPY public.user_user_permissions (id, user_id, permission_id) FROM stdin;
    public          qfsjgwmf    false    238            �           0    0    adeia_eidikoy_skopoy_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.adeia_eidikoy_skopoy_id_seq', 6, true);
          public          qfsjgwmf    false    246            �           0    0    adeia_ergasias_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.adeia_ergasias_id_seq', 4, true);
          public          qfsjgwmf    false    244            �           0    0    anastoli_ergasias_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.anastoli_ergasias_id_seq', 1, true);
          public          qfsjgwmf    false    242            �           0    0    appointment_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.appointment_id_seq', 6, true);
          public          qfsjgwmf    false    253            �           0    0    auth_group_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);
          public          qfsjgwmf    false    228            �           0    0    auth_group_permissions_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);
          public          qfsjgwmf    false    230            �           0    0    auth_permission_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.auth_permission_id_seq', 64, true);
          public          qfsjgwmf    false    226            �           0    0    django_admin_log_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, false);
          public          qfsjgwmf    false    239            �           0    0    django_content_type_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.django_content_type_id_seq', 16, true);
          public          qfsjgwmf    false    224            �           0    0    django_migrations_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.django_migrations_id_seq', 37, true);
          public          qfsjgwmf    false    222            �           0    0    tilergasia_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.tilergasia_id_seq', 1, true);
          public          qfsjgwmf    false    255            �           0    0 '   token_blacklist_blacklistedtoken_id_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public.token_blacklist_blacklistedtoken_id_seq', 12, true);
          public          qfsjgwmf    false    249            �           0    0 '   token_blacklist_outstandingtoken_id_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public.token_blacklist_outstandingtoken_id_seq', 32, true);
          public          qfsjgwmf    false    251            �           0    0    user_groups_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.user_groups_id_seq', 1, false);
          public          qfsjgwmf    false    235                        0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 17, true);
          public          qfsjgwmf    false    233                       0    0    user_user_permissions_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.user_user_permissions_id_seq', 1, false);
          public          qfsjgwmf    false    237                       2606    2801894 .   adeia_eidikoy_skopoy adeia_eidikoy_skopoy_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.adeia_eidikoy_skopoy
    ADD CONSTRAINT adeia_eidikoy_skopoy_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.adeia_eidikoy_skopoy DROP CONSTRAINT adeia_eidikoy_skopoy_pkey;
       public            qfsjgwmf    false    247            
           2606    2801883 "   adeia_ergasias adeia_ergasias_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.adeia_ergasias
    ADD CONSTRAINT adeia_ergasias_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.adeia_ergasias DROP CONSTRAINT adeia_ergasias_pkey;
       public            qfsjgwmf    false    245                       2606    2801875 (   anastoli_ergasias anastoli_ergasias_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.anastoli_ergasias
    ADD CONSTRAINT anastoli_ergasias_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.anastoli_ergasias DROP CONSTRAINT anastoli_ergasias_pkey;
       public            qfsjgwmf    false    243                       2606    2829500 /   appointment appointment_date_time_03ddaf7c_uniq 
   CONSTRAINT     r   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_date_time_03ddaf7c_uniq UNIQUE (date, "time");
 Y   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_date_time_03ddaf7c_uniq;
       public            qfsjgwmf    false    254    254            !           2606    2829496    appointment appointment_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_pkey;
       public            qfsjgwmf    false    254            �           2606    2801734    auth_group auth_group_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.auth_group DROP CONSTRAINT auth_group_name_key;
       public            qfsjgwmf    false    229            �           2606    2801720 R   auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);
 |   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq;
       public            qfsjgwmf    false    231    231            �           2606    2801709 2   auth_group_permissions auth_group_permissions_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissions_pkey;
       public            qfsjgwmf    false    231            �           2606    2801699    auth_group auth_group_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.auth_group DROP CONSTRAINT auth_group_pkey;
       public            qfsjgwmf    false    229            �           2606    2801711 F   auth_permission auth_permission_content_type_id_codename_01ab375a_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);
 p   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq;
       public            qfsjgwmf    false    227    227            �           2606    2801691 $   auth_permission auth_permission_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_pkey;
       public            qfsjgwmf    false    227            �           2606    2801854 $   authtoken_token authtoken_token_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_pkey PRIMARY KEY (key);
 N   ALTER TABLE ONLY public.authtoken_token DROP CONSTRAINT authtoken_token_pkey;
       public            qfsjgwmf    false    241                        2606    2801856 +   authtoken_token authtoken_token_user_id_key 
   CONSTRAINT     i   ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_key UNIQUE (user_id);
 U   ALTER TABLE ONLY public.authtoken_token DROP CONSTRAINT authtoken_token_user_id_key;
       public            qfsjgwmf    false    241            �           2606    2801740    company company_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (name);
 >   ALTER TABLE ONLY public.company DROP CONSTRAINT company_pkey;
       public            qfsjgwmf    false    232            �           2606    2801837 &   django_admin_log django_admin_log_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.django_admin_log DROP CONSTRAINT django_admin_log_pkey;
       public            qfsjgwmf    false    240            �           2606    2801683 E   django_content_type django_content_type_app_label_model_76bd3d3b_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);
 o   ALTER TABLE ONLY public.django_content_type DROP CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq;
       public            qfsjgwmf    false    225    225            �           2606    2801681 ,   django_content_type django_content_type_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.django_content_type DROP CONSTRAINT django_content_type_pkey;
       public            qfsjgwmf    false    225            �           2606    2801673 (   django_migrations django_migrations_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.django_migrations DROP CONSTRAINT django_migrations_pkey;
       public            qfsjgwmf    false    223                       2606    2801941 "   django_session django_session_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);
 L   ALTER TABLE ONLY public.django_session DROP CONSTRAINT django_session_pkey;
       public            qfsjgwmf    false    248            '           2606    2884213    tilergasia tilergasia_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.tilergasia
    ADD CONSTRAINT tilergasia_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.tilergasia DROP CONSTRAINT tilergasia_pkey;
       public            qfsjgwmf    false    256                       2606    2801951 F   token_blacklist_blacklistedtoken token_blacklist_blacklistedtoken_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken
    ADD CONSTRAINT token_blacklist_blacklistedtoken_pkey PRIMARY KEY (id);
 p   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken DROP CONSTRAINT token_blacklist_blacklistedtoken_pkey;
       public            qfsjgwmf    false    250                       2606    2801966 N   token_blacklist_blacklistedtoken token_blacklist_blacklistedtoken_token_id_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken
    ADD CONSTRAINT token_blacklist_blacklistedtoken_token_id_key UNIQUE (token_id);
 x   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken DROP CONSTRAINT token_blacklist_blacklistedtoken_token_id_key;
       public            qfsjgwmf    false    250                       2606    2801979 W   token_blacklist_outstandingtoken token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.token_blacklist_outstandingtoken
    ADD CONSTRAINT token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq UNIQUE (jti);
 �   ALTER TABLE ONLY public.token_blacklist_outstandingtoken DROP CONSTRAINT token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq;
       public            qfsjgwmf    false    252                       2606    2801962 F   token_blacklist_outstandingtoken token_blacklist_outstandingtoken_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.token_blacklist_outstandingtoken
    ADD CONSTRAINT token_blacklist_outstandingtoken_pkey PRIMARY KEY (id);
 p   ALTER TABLE ONLY public.token_blacklist_outstandingtoken DROP CONSTRAINT token_blacklist_outstandingtoken_pkey;
       public            qfsjgwmf    false    252            �           2606    2801755    user user_afm_key 
   CONSTRAINT     M   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_afm_key UNIQUE (afm);
 =   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_afm_key;
       public            qfsjgwmf    false    234            �           2606    2801753    user user_amka_key 
   CONSTRAINT     O   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_amka_key UNIQUE (amka);
 >   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_amka_key;
       public            qfsjgwmf    false    234            �           2606    2801759    user user_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_email_key;
       public            qfsjgwmf    false    234            �           2606    2801771    user_groups user_groups_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.user_groups
    ADD CONSTRAINT user_groups_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.user_groups DROP CONSTRAINT user_groups_pkey;
       public            qfsjgwmf    false    236            �           2606    2801793 6   user_groups user_groups_user_id_group_id_40beef00_uniq 
   CONSTRAINT     ~   ALTER TABLE ONLY public.user_groups
    ADD CONSTRAINT user_groups_user_id_group_id_40beef00_uniq UNIQUE (user_id, group_id);
 `   ALTER TABLE ONLY public.user_groups DROP CONSTRAINT user_groups_user_id_group_id_40beef00_uniq;
       public            qfsjgwmf    false    236    236            �           2606    2801761    user user_phone_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_phone_key UNIQUE (phone);
 ?   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_phone_key;
       public            qfsjgwmf    false    234            �           2606    2801751    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            qfsjgwmf    false    234            �           2606    2801779 0   user_user_permissions user_user_permissions_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.user_user_permissions
    ADD CONSTRAINT user_user_permissions_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.user_user_permissions DROP CONSTRAINT user_user_permissions_pkey;
       public            qfsjgwmf    false    238            �           2606    2801807 O   user_user_permissions user_user_permissions_user_id_permission_id_7dc6e2e0_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.user_user_permissions
    ADD CONSTRAINT user_user_permissions_user_id_permission_id_7dc6e2e0_uniq UNIQUE (user_id, permission_id);
 y   ALTER TABLE ONLY public.user_user_permissions DROP CONSTRAINT user_user_permissions_user_id_permission_id_7dc6e2e0_uniq;
       public            qfsjgwmf    false    238    238            �           2606    2801757    user user_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_username_key;
       public            qfsjgwmf    false    234                       1259    2801931 (   adeia_eidikoy_skopoy_company_id_8698291f    INDEX     o   CREATE INDEX adeia_eidikoy_skopoy_company_id_8698291f ON public.adeia_eidikoy_skopoy USING btree (company_id);
 <   DROP INDEX public.adeia_eidikoy_skopoy_company_id_8698291f;
       public            qfsjgwmf    false    247                       1259    2801932 -   adeia_eidikoy_skopoy_company_id_8698291f_like    INDEX     �   CREATE INDEX adeia_eidikoy_skopoy_company_id_8698291f_like ON public.adeia_eidikoy_skopoy USING btree (company_id varchar_pattern_ops);
 A   DROP INDEX public.adeia_eidikoy_skopoy_company_id_8698291f_like;
       public            qfsjgwmf    false    247                       1259    2801933 )   adeia_eidikoy_skopoy_employee_id_323cc535    INDEX     q   CREATE INDEX adeia_eidikoy_skopoy_employee_id_323cc535 ON public.adeia_eidikoy_skopoy USING btree (employee_id);
 =   DROP INDEX public.adeia_eidikoy_skopoy_employee_id_323cc535;
       public            qfsjgwmf    false    247                       1259    2801918 "   adeia_ergasias_company_id_1e3589c4    INDEX     c   CREATE INDEX adeia_ergasias_company_id_1e3589c4 ON public.adeia_ergasias USING btree (company_id);
 6   DROP INDEX public.adeia_ergasias_company_id_1e3589c4;
       public            qfsjgwmf    false    245                       1259    2801919 '   adeia_ergasias_company_id_1e3589c4_like    INDEX     |   CREATE INDEX adeia_ergasias_company_id_1e3589c4_like ON public.adeia_ergasias USING btree (company_id varchar_pattern_ops);
 ;   DROP INDEX public.adeia_ergasias_company_id_1e3589c4_like;
       public            qfsjgwmf    false    245                       1259    2801920 #   adeia_ergasias_employee_id_478b4a3a    INDEX     e   CREATE INDEX adeia_ergasias_employee_id_478b4a3a ON public.adeia_ergasias USING btree (employee_id);
 7   DROP INDEX public.adeia_ergasias_employee_id_478b4a3a;
       public            qfsjgwmf    false    245                       1259    2801905 %   anastoli_ergasias_company_id_f0d1ba2f    INDEX     i   CREATE INDEX anastoli_ergasias_company_id_f0d1ba2f ON public.anastoli_ergasias USING btree (company_id);
 9   DROP INDEX public.anastoli_ergasias_company_id_f0d1ba2f;
       public            qfsjgwmf    false    243                       1259    2801906 *   anastoli_ergasias_company_id_f0d1ba2f_like    INDEX     �   CREATE INDEX anastoli_ergasias_company_id_f0d1ba2f_like ON public.anastoli_ergasias USING btree (company_id varchar_pattern_ops);
 >   DROP INDEX public.anastoli_ergasias_company_id_f0d1ba2f_like;
       public            qfsjgwmf    false    243                       1259    2801907 &   anastoli_ergasias_employee_id_e2cadece    INDEX     k   CREATE INDEX anastoli_ergasias_employee_id_e2cadece ON public.anastoli_ergasias USING btree (employee_id);
 :   DROP INDEX public.anastoli_ergasias_employee_id_e2cadece;
       public            qfsjgwmf    false    243            "           1259    2829507    appointment_user_id_e98b8296    INDEX     W   CREATE INDEX appointment_user_id_e98b8296 ON public.appointment USING btree (user_id);
 0   DROP INDEX public.appointment_user_id_e98b8296;
       public            qfsjgwmf    false    254            �           1259    2801735    auth_group_name_a6ea08ec_like    INDEX     h   CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);
 1   DROP INDEX public.auth_group_name_a6ea08ec_like;
       public            qfsjgwmf    false    229            �           1259    2801731 (   auth_group_permissions_group_id_b120cbf9    INDEX     o   CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);
 <   DROP INDEX public.auth_group_permissions_group_id_b120cbf9;
       public            qfsjgwmf    false    231            �           1259    2801732 -   auth_group_permissions_permission_id_84c5c92e    INDEX     y   CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);
 A   DROP INDEX public.auth_group_permissions_permission_id_84c5c92e;
       public            qfsjgwmf    false    231            �           1259    2801717 (   auth_permission_content_type_id_2f476e4b    INDEX     o   CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);
 <   DROP INDEX public.auth_permission_content_type_id_2f476e4b;
       public            qfsjgwmf    false    227            �           1259    2801862 !   authtoken_token_key_10f0b77e_like    INDEX     p   CREATE INDEX authtoken_token_key_10f0b77e_like ON public.authtoken_token USING btree (key varchar_pattern_ops);
 5   DROP INDEX public.authtoken_token_key_10f0b77e_like;
       public            qfsjgwmf    false    241            �           1259    2801780    company_name_5abe57d9_like    INDEX     b   CREATE INDEX company_name_5abe57d9_like ON public.company USING btree (name varchar_pattern_ops);
 .   DROP INDEX public.company_name_5abe57d9_like;
       public            qfsjgwmf    false    232            �           1259    2801848 )   django_admin_log_content_type_id_c4bce8eb    INDEX     q   CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);
 =   DROP INDEX public.django_admin_log_content_type_id_c4bce8eb;
       public            qfsjgwmf    false    240            �           1259    2801849 !   django_admin_log_user_id_c564eba6    INDEX     a   CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);
 5   DROP INDEX public.django_admin_log_user_id_c564eba6;
       public            qfsjgwmf    false    240                       1259    2801943 #   django_session_expire_date_a5c62663    INDEX     e   CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);
 7   DROP INDEX public.django_session_expire_date_a5c62663;
       public            qfsjgwmf    false    248                       1259    2801942 (   django_session_session_key_c0390e0f_like    INDEX     ~   CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);
 <   DROP INDEX public.django_session_session_key_c0390e0f_like;
       public            qfsjgwmf    false    248            #           1259    2884224    tilergasia_company_id_c9c0c65b    INDEX     [   CREATE INDEX tilergasia_company_id_c9c0c65b ON public.tilergasia USING btree (company_id);
 2   DROP INDEX public.tilergasia_company_id_c9c0c65b;
       public            qfsjgwmf    false    256            $           1259    2884225 #   tilergasia_company_id_c9c0c65b_like    INDEX     t   CREATE INDEX tilergasia_company_id_c9c0c65b_like ON public.tilergasia USING btree (company_id varchar_pattern_ops);
 7   DROP INDEX public.tilergasia_company_id_c9c0c65b_like;
       public            qfsjgwmf    false    256            %           1259    2884226    tilergasia_employee_id_eb9575a5    INDEX     ]   CREATE INDEX tilergasia_employee_id_eb9575a5 ON public.tilergasia USING btree (employee_id);
 3   DROP INDEX public.tilergasia_employee_id_eb9575a5;
       public            qfsjgwmf    false    256                       1259    2801980 6   token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_like    INDEX     �   CREATE INDEX token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_like ON public.token_blacklist_outstandingtoken USING btree (jti varchar_pattern_ops);
 J   DROP INDEX public.token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_like;
       public            qfsjgwmf    false    252                       1259    2801977 1   token_blacklist_outstandingtoken_user_id_83bc629a    INDEX     �   CREATE INDEX token_blacklist_outstandingtoken_user_id_83bc629a ON public.token_blacklist_outstandingtoken USING btree (user_id);
 E   DROP INDEX public.token_blacklist_outstandingtoken_user_id_83bc629a;
       public            qfsjgwmf    false    252            �           1259    2801787    user_afm_320d4b5a_like    INDEX     \   CREATE INDEX user_afm_320d4b5a_like ON public."user" USING btree (afm varchar_pattern_ops);
 *   DROP INDEX public.user_afm_320d4b5a_like;
       public            qfsjgwmf    false    234            �           1259    2801786    user_amka_23b6089e_like    INDEX     ^   CREATE INDEX user_amka_23b6089e_like ON public."user" USING btree (amka varchar_pattern_ops);
 +   DROP INDEX public.user_amka_23b6089e_like;
       public            qfsjgwmf    false    234            �           1259    2801820    user_company_id_99854d28    INDEX     Q   CREATE INDEX user_company_id_99854d28 ON public."user" USING btree (company_id);
 ,   DROP INDEX public.user_company_id_99854d28;
       public            qfsjgwmf    false    234            �           1259    2801791    user_company_id_99854d28_like    INDEX     j   CREATE INDEX user_company_id_99854d28_like ON public."user" USING btree (company_id varchar_pattern_ops);
 1   DROP INDEX public.user_company_id_99854d28_like;
       public            qfsjgwmf    false    234            �           1259    2801789    user_email_54dc62b2_like    INDEX     `   CREATE INDEX user_email_54dc62b2_like ON public."user" USING btree (email varchar_pattern_ops);
 ,   DROP INDEX public.user_email_54dc62b2_like;
       public            qfsjgwmf    false    234            �           1259    2801805    user_groups_group_id_b76f8aba    INDEX     Y   CREATE INDEX user_groups_group_id_b76f8aba ON public.user_groups USING btree (group_id);
 1   DROP INDEX public.user_groups_group_id_b76f8aba;
       public            qfsjgwmf    false    236            �           1259    2801804    user_groups_user_id_abaea130    INDEX     W   CREATE INDEX user_groups_user_id_abaea130 ON public.user_groups USING btree (user_id);
 0   DROP INDEX public.user_groups_user_id_abaea130;
       public            qfsjgwmf    false    236            �           1259    2801790    user_phone_fcd7f7da_like    INDEX     `   CREATE INDEX user_phone_fcd7f7da_like ON public."user" USING btree (phone varchar_pattern_ops);
 ,   DROP INDEX public.user_phone_fcd7f7da_like;
       public            qfsjgwmf    false    234            �           1259    2801819 ,   user_user_permissions_permission_id_9deb68a3    INDEX     w   CREATE INDEX user_user_permissions_permission_id_9deb68a3 ON public.user_user_permissions USING btree (permission_id);
 @   DROP INDEX public.user_user_permissions_permission_id_9deb68a3;
       public            qfsjgwmf    false    238            �           1259    2801818 &   user_user_permissions_user_id_ed4a47ea    INDEX     k   CREATE INDEX user_user_permissions_user_id_ed4a47ea ON public.user_user_permissions USING btree (user_id);
 :   DROP INDEX public.user_user_permissions_user_id_ed4a47ea;
       public            qfsjgwmf    false    238            �           1259    2801788    user_username_cf016618_like    INDEX     f   CREATE INDEX user_username_cf016618_like ON public."user" USING btree (username varchar_pattern_ops);
 /   DROP INDEX public.user_username_cf016618_like;
       public            qfsjgwmf    false    234            7           2606    2801921 M   adeia_eidikoy_skopoy adeia_eidikoy_skopoy_company_id_8698291f_fk_company_name    FK CONSTRAINT     �   ALTER TABLE ONLY public.adeia_eidikoy_skopoy
    ADD CONSTRAINT adeia_eidikoy_skopoy_company_id_8698291f_fk_company_name FOREIGN KEY (company_id) REFERENCES public.company(name) DEFERRABLE INITIALLY DEFERRED;
 w   ALTER TABLE ONLY public.adeia_eidikoy_skopoy DROP CONSTRAINT adeia_eidikoy_skopoy_company_id_8698291f_fk_company_name;
       public          qfsjgwmf    false    247    232    4056            8           2606    2801926 I   adeia_eidikoy_skopoy adeia_eidikoy_skopoy_employee_id_323cc535_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.adeia_eidikoy_skopoy
    ADD CONSTRAINT adeia_eidikoy_skopoy_employee_id_323cc535_fk_user_id FOREIGN KEY (employee_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 s   ALTER TABLE ONLY public.adeia_eidikoy_skopoy DROP CONSTRAINT adeia_eidikoy_skopoy_employee_id_323cc535_fk_user_id;
       public          qfsjgwmf    false    247    4072    234            5           2606    2801908 A   adeia_ergasias adeia_ergasias_company_id_1e3589c4_fk_company_name    FK CONSTRAINT     �   ALTER TABLE ONLY public.adeia_ergasias
    ADD CONSTRAINT adeia_ergasias_company_id_1e3589c4_fk_company_name FOREIGN KEY (company_id) REFERENCES public.company(name) DEFERRABLE INITIALLY DEFERRED;
 k   ALTER TABLE ONLY public.adeia_ergasias DROP CONSTRAINT adeia_ergasias_company_id_1e3589c4_fk_company_name;
       public          qfsjgwmf    false    4056    245    232            6           2606    2801913 =   adeia_ergasias adeia_ergasias_employee_id_478b4a3a_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.adeia_ergasias
    ADD CONSTRAINT adeia_ergasias_employee_id_478b4a3a_fk_user_id FOREIGN KEY (employee_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 g   ALTER TABLE ONLY public.adeia_ergasias DROP CONSTRAINT adeia_ergasias_employee_id_478b4a3a_fk_user_id;
       public          qfsjgwmf    false    4072    245    234            3           2606    2801895 G   anastoli_ergasias anastoli_ergasias_company_id_f0d1ba2f_fk_company_name    FK CONSTRAINT     �   ALTER TABLE ONLY public.anastoli_ergasias
    ADD CONSTRAINT anastoli_ergasias_company_id_f0d1ba2f_fk_company_name FOREIGN KEY (company_id) REFERENCES public.company(name) DEFERRABLE INITIALLY DEFERRED;
 q   ALTER TABLE ONLY public.anastoli_ergasias DROP CONSTRAINT anastoli_ergasias_company_id_f0d1ba2f_fk_company_name;
       public          qfsjgwmf    false    243    4056    232            4           2606    2801900 C   anastoli_ergasias anastoli_ergasias_employee_id_e2cadece_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.anastoli_ergasias
    ADD CONSTRAINT anastoli_ergasias_employee_id_e2cadece_fk_user_id FOREIGN KEY (employee_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 m   ALTER TABLE ONLY public.anastoli_ergasias DROP CONSTRAINT anastoli_ergasias_employee_id_e2cadece_fk_user_id;
       public          qfsjgwmf    false    234    4072    243            ;           2606    2829501 3   appointment appointment_user_id_e98b8296_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_user_id_e98b8296_fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 ]   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_user_id_e98b8296_fk_user_id;
       public          qfsjgwmf    false    4072    254    234            *           2606    2801726 O   auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;
 y   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm;
       public          qfsjgwmf    false    227    4042    231            )           2606    2801721 P   auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;
 z   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id;
       public          qfsjgwmf    false    231    4047    229            (           2606    2801712 E   auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;
 o   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co;
       public          qfsjgwmf    false    227    4037    225            2           2606    2801863 ;   authtoken_token authtoken_token_user_id_35299eff_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_35299eff_fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 e   ALTER TABLE ONLY public.authtoken_token DROP CONSTRAINT authtoken_token_user_id_35299eff_fk_user_id;
       public          qfsjgwmf    false    241    4072    234            0           2606    2801838 G   django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co    FK CONSTRAINT     �   ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;
 q   ALTER TABLE ONLY public.django_admin_log DROP CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co;
       public          qfsjgwmf    false    240    225    4037            1           2606    2801843 =   django_admin_log django_admin_log_user_id_c564eba6_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 g   ALTER TABLE ONLY public.django_admin_log DROP CONSTRAINT django_admin_log_user_id_c564eba6_fk_user_id;
       public          qfsjgwmf    false    4072    234    240            <           2606    2884214 9   tilergasia tilergasia_company_id_c9c0c65b_fk_company_name    FK CONSTRAINT     �   ALTER TABLE ONLY public.tilergasia
    ADD CONSTRAINT tilergasia_company_id_c9c0c65b_fk_company_name FOREIGN KEY (company_id) REFERENCES public.company(name) DEFERRABLE INITIALLY DEFERRED;
 c   ALTER TABLE ONLY public.tilergasia DROP CONSTRAINT tilergasia_company_id_c9c0c65b_fk_company_name;
       public          qfsjgwmf    false    4056    232    256            =           2606    2884219 5   tilergasia tilergasia_employee_id_eb9575a5_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.tilergasia
    ADD CONSTRAINT tilergasia_employee_id_eb9575a5_fk_user_id FOREIGN KEY (employee_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 _   ALTER TABLE ONLY public.tilergasia DROP CONSTRAINT tilergasia_employee_id_eb9575a5_fk_user_id;
       public          qfsjgwmf    false    256    234    4072            9           2606    2801967 T   token_blacklist_blacklistedtoken token_blacklist_blac_token_id_3cc7fe56_fk_token_bla    FK CONSTRAINT     �   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken
    ADD CONSTRAINT token_blacklist_blac_token_id_3cc7fe56_fk_token_bla FOREIGN KEY (token_id) REFERENCES public.token_blacklist_outstandingtoken(id) DEFERRABLE INITIALLY DEFERRED;
 ~   ALTER TABLE ONLY public.token_blacklist_blacklistedtoken DROP CONSTRAINT token_blacklist_blac_token_id_3cc7fe56_fk_token_bla;
       public          qfsjgwmf    false    252    4124    250            :           2606    2801981 ]   token_blacklist_outstandingtoken token_blacklist_outstandingtoken_user_id_83bc629a_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.token_blacklist_outstandingtoken
    ADD CONSTRAINT token_blacklist_outstandingtoken_user_id_83bc629a_fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 �   ALTER TABLE ONLY public.token_blacklist_outstandingtoken DROP CONSTRAINT token_blacklist_outstandingtoken_user_id_83bc629a_fk_user_id;
       public          qfsjgwmf    false    4072    252    234            +           2606    2884199 -   user user_company_id_99854d28_fk_company_name    FK CONSTRAINT     �   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_company_id_99854d28_fk_company_name FOREIGN KEY (company_id) REFERENCES public.company(name) DEFERRABLE INITIALLY DEFERRED;
 Y   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_company_id_99854d28_fk_company_name;
       public          qfsjgwmf    false    234    232    4056            -           2606    2801799 :   user_groups user_groups_group_id_b76f8aba_fk_auth_group_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_groups
    ADD CONSTRAINT user_groups_group_id_b76f8aba_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;
 d   ALTER TABLE ONLY public.user_groups DROP CONSTRAINT user_groups_group_id_b76f8aba_fk_auth_group_id;
       public          qfsjgwmf    false    229    4047    236            ,           2606    2801794 3   user_groups user_groups_user_id_abaea130_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_groups
    ADD CONSTRAINT user_groups_user_id_abaea130_fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 ]   ALTER TABLE ONLY public.user_groups DROP CONSTRAINT user_groups_user_id_abaea130_fk_user_id;
       public          qfsjgwmf    false    234    4072    236            /           2606    2801813 N   user_user_permissions user_user_permission_permission_id_9deb68a3_fk_auth_perm    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_user_permissions
    ADD CONSTRAINT user_user_permission_permission_id_9deb68a3_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;
 x   ALTER TABLE ONLY public.user_user_permissions DROP CONSTRAINT user_user_permission_permission_id_9deb68a3_fk_auth_perm;
       public          qfsjgwmf    false    227    4042    238            .           2606    2801808 G   user_user_permissions user_user_permissions_user_id_ed4a47ea_fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_user_permissions
    ADD CONSTRAINT user_user_permissions_user_id_ed4a47ea_fk_user_id FOREIGN KEY (user_id) REFERENCES public."user"(id) DEFERRABLE INITIALLY DEFERRED;
 q   ALTER TABLE ONLY public.user_user_permissions DROP CONSTRAINT user_user_permissions_user_id_ed4a47ea_fk_user_id;
       public          qfsjgwmf    false    234    4072    238            �   �   x����
1E��W����&���4"����r�7���ls9�8�#0ddeZ1�5Kq(�8��4��Vs�]�-<��˽����G��.f�U�Ouu!�S;��ZX�rڽ
�6e�T�lN�s�3k�﷪UJ� <rp      �   g   x���!�0DQݜ�����4���8������}��k"�+t�m��2�^��+ מ� ��#��=�����*���<�0+���������Yjo}��4-�      �   9   x�3�4202�50�52F0MLC+#+c=s3m��|GN#N�=... �z�      �   ^   x�3�����/vH�M���K���4�4202�50�56�4��26�20����2"����Ԙ�M
b��	���T��)�����!�L� ��&^      �      x������ � �      �      x������ � �      �   �  x�m�ۮ� E��+�U|�广p+U4F)��M������������Z�]�FMS3�[��__����K���[ٛfT�B��g�9����{o 4f�E��m�Y�5ܐG*�@�#��1	{FEFG�]��mu�E�A0�-��K��HK�:�t���`�}6�:���k�k�b"��ޑ�@u>`�b�H�>xPd�E?����S��t��1�J�g*�xf�B��uTC(Xe�%��X�}�#\aXɮ�ח�|s�����/��^V��� �<7��S�y�);���)�D�}� �B����C���U�w�i�zS�Q�8����e�>�Z��$�@-	�e�T���)l���Q����ޛH���4ϰ��4ϐ��8�O�S���ݫ��nq������ϕ��0��/��<��C1i�&�,���ݵm|��{!V��(��~ft�!��DP�sl���Z,������f�� Ț�A� il�P
 l�Y]�ټΖ�q"q��U���2ʺ[��$e�����1l�{��+;{K����Ws0ae]�Fa�2J*]�	�i��8c�c6EH�%G�d�S�7�󩰄?Ҧr:���Lof��m|CqGYG9��Ah�VN�������'H��&������      �      x������ � �      �   !   x��w�
�w4� ˵�+��+F��� zF(      �      x������ � �      �   �   x�e�[N�0E��� 2/`/H�4�XM�(v���:�j�����X�r �3d�x�x j�%ՙ�X�72VmO0���z/���Һa�/@àM|�B��e'�R�W��:���fNu$c2|��Ĵ���s�I�MZ�ckO�)	�/��_T�^�xK���)�9�S���韣��I"˸9g�R�����0\���y��O��^�g      �   2  x����n�H������jZu裟e�k�hF��o�8Ď{�AX������w��Ou�����v ����T펀���� {���&�<ѝ��Xw��:^��I쫮.���D��9�>zwP�Y�(���X����f����/�]�ۺ?ɿ�P�ʐc�e6_P�$�����{
)p:`.�n}MY.��ᜦ"���ms�h�)�v85���C��zy�~�X9�_s3n���).#+2"���]
�]�ͱJ�8��x��8c��i�Nu�-��8m�F���|;b��M�J��e�����pA��a>��*`0o n�E��Y&T��8��_��4��'�}flVF�����-���]7�ˇ�0���.�Wd��|�h�URĜ��H�+�r�/L����2@�{���K���V�����bo1�����qZ�z�fH���'d�huHK���)^��P���F�Q��~؉Q��u�K���m�h��F�j�<b �-�c��V*H�8�x�Vͻ�a�7{�h��b���9��iT��*3�\V���?�fz�2-&q�1o/ْ��0�)U������&��o+f�z-ƕp��މ{��@a�Z+ �`�H߁d�K��=�J �a�R��Q�9X���D�_K�biV�%�9cK �D�E� ����9`$
6������F�{�{�J��뷀�:i�c49�^�I�i�q��oS�壽7��gO�Ip��CӧN������H{ �I1OV�;�m3!��f�3h�����1���Ħ� 2�@,�����׍`�9L�������he�������?TǛ'      �      x������ � �      �   ;   x�3�4202�50�54G0-�L#C+#s+C3=#SSmN��|GN#�=... �-�      �   �   x�]�1�@�ڼ�}o��ߑ�p��ѲB�)��q�5F��z��C�H��v�@]B��&yj����	w�M@~�:E�:59S��S|յo�����Ѹɼ�\�^s�I�GୃSf}���V_��%b�R�&��E�e�HR�3Q�#���H��AN�^��L��ׄ^LDoZ\F�      �   �  x���[O�����b��@浝�7�� ��R.mNb��h���@�E�Qp-����Q"~�o̊ŧ������=L�p�o��aG�?w'E۫���7��e�%��Xw��J��^E������f�P�w��I�Y�N�U�4ږ�zE/�ӌ�����.�-}�;]���Jut�	Q.�2�+? �dz
���?�ݜoK��a����,W�y��Ñ�l���G�p�}�zO�֍��x��"��*�Ul���"w��$���� ��(���/��$I�!#319%!�XpΌ
�1������MU�2��^nw��mM�>���əM��2�(�t�#ƺO��^7Gl�5a/��|�7������zT��$X��ǑW�BF��5�8f�;�s��L���"1%1��$4��M�"��+�V��Q��$YZ�~ޥv1�m�����`��;�ћ�MS����wd�>�&��i�֥-���7�9�OZs.i�G'�vG{������w��L�� ߙ���e�+D2	M�'�F,Bf`D	4bMH�݈YZ���K�Yu�,H��EUQ? S�k(�^��zi�ҿ�9�RQY��L�o���c�?����=����g,��	�fW�8�c���A	���}O3�⦉M�3Y C�yG�A)I�Q�7AV(��_{�c52e������t�*+S�.Q��'�.&́�9n��iք�z�����e��`e�I��� ���Es@�b�4��^��ÐK�&L�1�f�-/�_E�q(Bi�Р<Jbar!*QŸ3�N��'3���KcH����k���ce����+���꣗��f?3k�l�����:n-_���~dK�0���{o(������53���K���;������:f���I�%IL2Ð�&�`j��әP?-���ٹ��;��q̟Oj6)���S�d�,��_��u.��צ/�s|�g�SY���f �t�דm���q4��^1}�	�aT�;Q�`��z���'/��w��yAD�f ��@K!����D0�fE�(�
}���7+��BЮ�i��Q/|w�Hd�̷F�c� X��;u�-�cs7�4~�2dХI�yhlt@��dl���e��#�a�8�f��$��
�(�D�XF"f&�"�f�ț1#_{����j1�_��[�Ղ~�eՉ�������e��/��5=͆��H4��D�-}}-^��n�����;��ezߙ1Z��ou�|G�`�������0E�@�HH���I�
F�a#�d�3�;� 5���y4�س.�A1�r&t�*&���^6o����5DVܡ`*�c�/�G��d��LMugۺb��3j�iB#��}�&bp�u�E�!�)%�1�<��o-]�l6D��	$�A�کm�c�VM�a��е��=#Xt��b0n�X��͎�{�.���؄�aQ槷��q�kfв��C����y��{��Xb#�1&�P��2�Lk�c�+�&+�&����:4�	��Ƚ�������Qu�0s
�ȐW��g�o��Ϧ
��%��r�yxX��D���t�B�ƽ�K�7_�����䎢��%�t��`y����RK�l֔���q�
�F*�&���*W���?��,@���R��%s�v�W�^���k�LW��O絊�ɮ��<�����(�����Y��0�$cx�����%�0�15i�X}�$�L�BHFA�qH�q�D�5�]�/�h���3ύ�ʦ)l��s3�C�C
IFKh������:{]�q�}�����x6˼��:�m���O��D&>�n*k�]6����V�85���X���H��1��&P���D�Yڽ@�wZ�q�e/����m7C��NU�=���C����=j�U�-M�:�7{���8�i/�����d���F���at�%d�T|Gv��#Z���	#1�L`M	B1���|�_vQ?~m�^��]���VQ�z���)Z��	/�� �$�e�ߝ�R0�1�Т��G-6��N�Ocٍ"Kt�H���`�lS0k�PN�+`���e�\
3f(��DrnƱa�$v�
���/��Y�U0���#ȿ�Y~��W=�mqo6<��"��g�͛�1{D���>��6[f�7���7����nG�F�1�ʌ�;b�a��#�5����Y��$��6��a$4�$�9�A�"j`�˛���<�8�_�L����� ,��v�m)���� h�n��^�r;�ɏuI�6����b�c�z�I_:/[t.��b���8������2�X�RF���9�^����#"xLL�YC�^RB"XL�˛�����b����i�xģ�bؤ�ʣp����+�~�q?o��O���ȬQ�����t>�7��{�8��׎-y�Ի<A�i;��LX"������;���;1:1�1�@0�!ɤF:H� q����AN��E'�;=�Xu��$���Nv��^�=*����rnj���Y��}�j>��{S.n�z�m�z�]E���loM�X���s�c��H4J�5�$WR��8,��i!%�FM�$�8Tk +�&�`�;9}�X{6!k�ycoVY,3(H�w �\��ӌ�"J��_7�2��qQ]5�n��_�<�����0���R�A���~�]���+d ^�0&ߑ���i�#�T`$����f��˺��Bn���2X�z��N����
�3JaA?�g� ��wh\.�*����Oˣt��x�V�U"ڍ6WQC(���v�A�Z�u{j^"cw�QV3�d?�����;��i�$�HX�i�9���$ a��D���r���"#���~��l�0P��"��<˰�:�-0ڿ�����W��!�W�3&gΎ����1}S˺G��!x]�{��~��(�`TC�SN��}Dߑ������b.�1E��#Ƙ�I��D���f/&�3��2�KA�-?t��3��٣�y�������z��6k��}bt;���m����z��7��R�G���Ӎ=�@흗���#���;2��D�P�Ȉ���H���	�T��Bn"�d�w��U:�Xf � ��|f�X��O��K�X��h����M6Y/��]�ƍ�Ѓ��׃���7����~�	w���[f�������HE�]`q�w��d	O�!���2JL"Nn���*�&�a��u#Wп`0���q��ʣ���N;��{y�ο����̃�ϳ�֬���f.Zh�{9�;�}g�߷T��_�t�DI.�u��}��&��L�!��z[��0�̓�Bnb��̭�����-���r�����q�X�!W������	X�_���LD/��(��{��`<�W��������o����ɪ�vrs��H���EƯ����;3!8c��8@�ˤ)��I�� �3bv�fEv�8Ȁ�ȟM��f�� m�KR�����loz�?��j� �w�䈧�����ioS͓�^Փ��~~��BVj��	D)��s�C2��� s�aLr3@���'�q�d7��R&����%�ʱ>��]>$�[';�� %9���s�'H���L�j��y��y;�F�u"�^�}Ҭ�\�cߜL.��J_&�$�_#��~ I	���ha$5MB�Л�{w����8l�P�>+�٤8/O֤\�`V*��1/�+�se.v�`3}ݺA��V�ŘV��6}�/a����0"�3z��gl�������P(C��b
��8Q�Jm�0�Л�?0s������|�J�9T���|HR��P�� E��6�1͒�M����������]��fy��:,��V^������A���;CQ&/����{�� �qH����(l䑈L�B����&�������֏^1)���ƺ���:�|xP��`[�o����\������~5�J�:L>X<�Y��/�M�t�A��&W���T�r���<��kNE�)�"@$BLVƑ�eX�o�R��~{�      �     x�m�]��0�k��M"P@��&�����-(�d��|*�E�����.��=�'}�6 
�b�~��.�.�q̆��H��^z3ިp?:[��?��0�?W!������E�õ��2+��ׄ:R�y��2O�!�+9,��"�����z@8ɮ�Cճ�TZl�Ď1Ȉ9�-3��.��3�"vx3Si����[��(�e��,��d>�m����]QM�*�U����UoidՇ�l���,}o;�2\82f������vja�d:C?�6�ʝ�*� �Vĳ`�F�������܁�W���#7L:��XP���{����-Y
���֌���Y,g)�]�ݦA��c�������"'�b=!q�,.��0l�s]����*ܰԎ�͉�a5V`�b���7��������ܿ ��,7r<�G�O�8r��g��;�T��3�&��%;��ۙڀ��8Z�R�:���8t9r��%k��,n��f�j�/3�w��=��D�~�T5���%�����^��c}]�y�IQ��_���       �      x������ � �      �      x������ � �     